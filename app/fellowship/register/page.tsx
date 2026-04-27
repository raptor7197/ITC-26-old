"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProtectedRoute } from "@/lib/useProtectedRoute";
import { RegistrationDB, Registration } from "@/lib/firestore";
import { validateRegistration, sanitizeFields } from "@/lib/validation";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FellowshipApplication() {
  const router = useRouter();
  const { user, loading: authLoading } = useProtectedRoute({
    redirectTo: "/login",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [institutionalEmailError, setInstitutionalEmailError] = useState<
    string | null
  >(null);
  const [success, setSuccess] = useState(false);
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [writeUpFile, setWriteUpFile] = useState<File | null>(null);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [aadharFile, setAadharFile] = useState<File | null>(null);
  const [bonafideFile, setBonafideFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    institutionalEmail: "",
    phone: "",
    designation: "",
    highestQualification: "",
    year: "",
    institution: "",
    institutionAddress: "",
    city: "",
    state: "",
    pinCode: "",
    pastFellowship: "",
    publications: "",
    scopusId: "",
    googleScholarId: "",
    ieeePaperId: "",
    writeUpFileUrl: "",
    idCardFileUrl: "",
    aadharFileUrl: "",
    bonafideFileUrl: "",
  });

  useEffect(() => {
    const loadRegistration = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const result = await RegistrationDB.findByUidAndType(
          user.uid,
          "Fellowship",
          user.email,
        );

        if (result) {
          router.push("/dashboard");
          return;
        } else {
          setFormData((prev) => ({
            ...prev,
            name: user.displayName || "",
          }));
          setIsEditing(true);
        }
      } catch (err) {
        console.error("Error loading registration:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading && user) {
      loadRegistration();
    }
  }, [authLoading, user]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "institutionalEmail") {
      const trimmed = value.trim().toLowerCase();

      if (!trimmed) {
        setInstitutionalEmailError("Institutional email address is required.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        setInstitutionalEmailError("Please enter a valid email address.");
        return;
      }

      const domain = trimmed.split("@")[1];
      if (!domain) {
        setInstitutionalEmailError("Please enter a valid email address.");
        return;
      }

      if (domain === "gmail.com" || domain.endsWith(".gmail.com")) {
        setInstitutionalEmailError(
          "Institutional mail address required. Gmail addresses are not allowed.",
        );
        return;
      }

      setInstitutionalEmailError(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setError(null);

      if (file.size > 5 * 1024 * 1024) {
        setError("File size should not exceed 5 MB.");
        e.target.value = "";
        return;
      }

      if (name === "writeUpFile" && file.type !== "application/pdf") {
        setError("The write up must be a PDF file.");
        e.target.value = "";
        return;
      }

      if (
        name === "idCardFile" &&
        file.type !== "application/pdf" &&
        !file.type.startsWith("image/")
      ) {
        setError("The institution ID card must be a PDF or image file.");
        e.target.value = "";
        return;
      }

      if (
        name === "aadharFile" &&
        file.type !== "application/pdf" &&
        !file.type.startsWith("image/")
      ) {
        setError("The Aadhaar card must be a PDF or image file.");
        e.target.value = "";
        return;
      }

      if (
        name === "bonafideFile" &&
        file.type !== "application/pdf" &&
        !file.type.startsWith("image/")
      ) {
        setError("The Bonafide/NOC certificate must be a PDF or image file.");
        e.target.value = "";
        return;
      }

      if (name === "writeUpFile") setWriteUpFile(file);
      if (name === "idCardFile") setIdCardFile(file);
      if (name === "aadharFile") setAadharFile(file);
      if (name === "bonafideFile") setBonafideFile(file);
    }
  };

  const uploadFile = async (file: File, path: string) => {
    const storageRef = ref(storage, path);
    const metadata = { contentType: "application/pdf" };
    await uploadBytes(storageRef, file, metadata);
    return await getDownloadURL(storageRef);
  };

  const isNonGmailEmail = (email: string) => {
    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return false;

    const domain = trimmed.split("@")[1];
    if (!domain) return false;

    return domain !== "gmail.com" && !domain.endsWith(".gmail.com");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setError(null);
    setSubmitting(true);

    const cleaned = sanitizeFields(formData);

    const validation = validateRegistration({
      ...cleaned,
      email: user.email || "",
    });
    if (!validation.valid) {
      setError(validation.error);
      setSubmitting(false);
      return;
    }

    try {
      let finalWriteUpUrl = cleaned.writeUpFileUrl;
      let finalIdCardUrl = cleaned.idCardFileUrl;
      let finalAadharUrl = cleaned.aadharFileUrl;
      let finalBonafideUrl = cleaned.bonafideFileUrl;

      if (writeUpFile) {
        finalWriteUpUrl = await uploadFile(
          writeUpFile,
          `fellowships/${user.uid}/${Date.now()}_${writeUpFile.name}`,
        );
      } else if (!finalWriteUpUrl) {
        setError("Please upload the research write up.");
        setSubmitting(false);
        return;
      }

      if (idCardFile) {
        finalIdCardUrl = await uploadFile(
          idCardFile,
          `fellowships/${user.uid}/${Date.now()}_${idCardFile.name}`,
        );
      } else if (!finalIdCardUrl) {
        setError("Please upload your institution ID card.");
        setSubmitting(false);
        return;
      }

      if (aadharFile) {
        finalAadharUrl = await uploadFile(
          aadharFile,
          `fellowships/${user.uid}/${Date.now()}_${aadharFile.name}`,
        );
      } else if (!finalAadharUrl) {
        setError("Please upload your Aadhaar card.");
        setSubmitting(false);
        return;
      }

      if (bonafideFile) {
        finalBonafideUrl = await uploadFile(
          bonafideFile,
          `fellowships/${user.uid}/${Date.now()}_${bonafideFile.name}`,
        );
      } else if (!finalBonafideUrl) {
        setError("Please upload your Bonafide/NOC certificate.");
        setSubmitting(false);
        return;
      }

      const finalData = {
        ...cleaned,
        email: user.email || "",
        writeUpFileUrl: finalWriteUpUrl,
        idCardFileUrl: finalIdCardUrl,
        aadharFileUrl: finalAadharUrl,
        bonafideFileUrl: finalBonafideUrl,
      };

      let result;
      if (registration && registration.id) {
        result = await RegistrationDB.update(
          registration.id,
          user.uid,
          finalData,
        );
      } else {
        result = await RegistrationDB.create({
          uid: user.uid,
          ...finalData,
          registrationType: "Fellowship",
        });
      }

      if (result) {
        setSuccess(true);
        setRegistration(result as Registration);
        setIsEditing(false);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Failed to save registration");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-transparent flex items-center justify-center ">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading your application...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-transparent flex items-center justify-center px-[8%] sm:px-[6%] md:px-[5%] lg:px-[4%] pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: `url('/images/homepage-bg.png')`,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] w-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)",
          }}
        ></div>
        <div
          className="absolute top-0 bottom-0 right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] w-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl relative z-10 mx-auto">
        {registration && !isEditing ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-shrink-0 bg-green-50 rounded-full p-2">
                <svg
                  className="w-7 h-7 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Application Submitted
                </h2>
                <p className="text-gray-500 text-sm mt-0.5">
                  You have successfully submitted your Fellowship registration.
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="text-sm font-bold text-blue-900 mb-2">
                Important Notice
              </h3>
              <p className="text-sm text-blue-800 mb-2">
                Please ensure you have the following documents ready for
                verification/reimbursement:
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-blue-800">
                <li>Valid Institutional ID Card</li>
                <li>Aadhaar Card</li>
                <li>
                  <strong>For Students:</strong> A Bonafide certificate issued
                  by the Head of the Department on official letterhead.
                </li>
                <li>
                  <strong>For Faculty:</strong> A recommendation letter/NOC from
                  the Head of the Department/Principal/Director on official
                  letterhead.
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                  registration.status === "approved"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : registration.status === "rejected"
                      ? "bg-red-100 text-red-700 border-red-200"
                      : "bg-yellow-100 text-yellow-700 border-yellow-200"
                }`}
              >
                Status:{" "}
                {registration.status === "approved"
                  ? "Approved"
                  : registration.status === "rejected"
                    ? "Rejected"
                    : "Pending Review"}
              </span>
            </div>

            <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-6">
              {[
                { label: "Name (Aadhar)", value: registration.name },
                { label: "Gender", value: registration.gender },
                { label: "Email (Google)", value: registration.email },
                {
                  label: "Institutional Email",
                  value: registration.institutionalEmail,
                },
                { label: "Mobile (WhatsApp)", value: registration.phone },
                { label: "Designation", value: registration.designation },
                {
                  label: "Highest Qual.",
                  value: registration.highestQualification,
                },
                { label: "Year", value: registration.year || "-" },
                { label: "Institution", value: registration.institution },
                {
                  label: "City / State",
                  value: `${registration.city || "-"} / ${registration.state || "-"}`,
                },
                { label: "PIN Code", value: registration.pinCode },
                {
                  label: "Past Fellowship",
                  value: registration.pastFellowship,
                },
                {
                  label: "Paper/Hackathon ID",
                  value: registration.ieeePaperId,
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-center px-5 py-3 odd:bg-gray-50 even:bg-white"
                >
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-48 shrink-0 mb-1 sm:mb-0">
                    {label}
                  </span>
                  <span className="text-gray-800 text-sm">{value || "—"}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
              >
                Edit Application
              </button>
              <button
                onClick={() => window.history.back()}
                className="flex-1 bg-white text-black border border-gray-300 py-3 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-8 mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {registration ? "Edit Application" : "Fellowship Application"}
              </h2>
              <p className="text-gray-500 text-sm">
                The name, email, and photo associated with your Google account
                will be recorded when you upload files and submit this form.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Email: <strong>{user?.email}</strong>
              </p>
              <p className="text-xs text-red-500 mt-2">
                * Indicates required question
              </p>
            </div>

            {error && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
                Application saved successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name (As per your Aadhar){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={200}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Institutional Email ID{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="institutionalEmail"
                    value={formData.institutionalEmail}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    pattern="^(?!.*@(?:.*\\.)?gmail\\.com$)[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                    title="Institutional mail address required. Gmail addresses are not allowed."
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 text-gray-900 text-sm ${
                      institutionalEmailError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {institutionalEmailError ? (
                    <p className="text-xs text-red-600 mt-1">
                      {institutionalEmailError}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">
                      Enter your institutional mail address only.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Number (Whatsapp){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    pattern="[\d\s+()-]{7,20}"
                    title="Enter a valid phone number (7–20 characters, digits/spaces/dashes)"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  >
                    <option value="" disabled>
                      Select Designation
                    </option>
                    <option value="Faculty">Faculty</option>
                    <option value="Research Scholar">Research Scholar</option>
                    <option value="PG Student">PG Student</option>
                    <option value="UG Student">UG Student</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Fellowship Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  >
                    <option value="" disabled>
                      Fellowship Category
                    </option>
                    <option value="Faculty">Tier I</option>
                    <option value="Student (UG)">Tier II</option>
                    <option value="Student (PG)">Tier III</option>
                    <option value="Research Scholar"></option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Current Academic Year for Student / Years of Experience for
                    Faculty <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  >
                    <option value="" disabled>
                      Select Year
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Current Institution Name (Working/Studying)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  maxLength={300}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Complete Postal Address of Institution{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="institutionAddress"
                  value={formData.institutionAddress}
                  onChange={handleChange}
                  required
                  rows={2}
                  maxLength={500}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    PIN Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Have you received ITC fellowship in the past? (If yes, mention
                  the years) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pastFellowship"
                  value={formData.pastFellowship}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  placeholder="e.g., No / Yes (2022, 2023)"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Enter your latest VLSI Testing related Publications with
                  Citation (Max 3) <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="publications"
                  value={formData.publications}
                  onChange={handleChange}
                  required
                  rows={3}
                  maxLength={1000}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm resize-none"
                  placeholder="1. Title 1&#10;2. Title 2&#10;3. Title 3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Scopus ID (Optional)
                  </label>
                  <input
                    type="text"
                    name="scopusId"
                    value={formData.scopusId}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Google Scholar ID (Optional)
                  </label>
                  <input
                    type="text"
                    name="googleScholarId"
                    value={formData.googleScholarId}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Provide a short write up on your current area of research and
                  the purpose of attending ITC 2026 (max 1 page PDF){" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload 1 supported file: PDF. Max 5 MB.
                </p>
                <input
                  type="file"
                  name="writeUpFile"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {formData.writeUpFileUrl && !writeUpFile && (
                  <p className="text-xs text-green-600 mt-2">
                    ✓ Previously uploaded file exists
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mention your ID of Submitted / Selected - Paper / Poster /
                  Hackathon, if any in ITC India 2026{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ieeePaperId"
                  value={formData.ieeePaperId}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="e.g., None / 1234"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Upload your institution ID card{" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload 1 supported file. Max 5 MB.
                </p>
                <input
                  type="file"
                  name="idCardFile"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {formData.idCardFileUrl && !idCardFile && (
                  <p className="text-xs text-green-600 mt-2">
                    ✓ Previously uploaded file exists
                  </p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Upload your Aadhaar Card{" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload 1 supported file. Max 5 MB.
                </p>
                <input
                  type="file"
                  name="aadharFile"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {formData.aadharFileUrl && !aadharFile && (
                  <p className="text-xs text-green-600 mt-2">
                    ✓ Previously uploaded file exists
                  </p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Upload your Bonafide / NOC Certificate{" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload 1 supported file. Max 5 MB.
                </p>
                <input
                  type="file"
                  name="bonafideFile"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {formData.bonafideFileUrl && !bonafideFile && (
                  <p className="text-xs text-green-600 mt-2">
                    ✓ Previously uploaded file exists
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  disabled={submitting || !!institutionalEmailError}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                {isEditing && registration && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-white text-black border border-gray-300 py-3 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
