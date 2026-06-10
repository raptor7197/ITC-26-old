import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthorKit() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-[#6aaff1]">
            JULY 19-21, 2026 | RADISSON BLU, BENGALURU
          </p>
          <p className="text-lg md:text-xl font-medium mt-2 text-white">
            Theme: Reimagining Test in the Era of Intelligent Silicon
          </p>
          <h2 className="text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white">
            AUTHOR KIT
          </h2>
          <p className="text-lg md:text-xl font-medium mt-4 text-gray-300">
            Guidelines for the authors of Accepted Regular Papers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Camera-ready Paper Submission
              </h3>
              <p className="mb-4 text-gray-200">
                Authors, please complete the following steps by 15th June 2026 :
              </p>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
                <li>Prepare your final version, including the IEEE copyright notice</li>
                <li>PDF eXpress Online File Conversion/PDF Validation Tool</li>
                <li>Complete and submit IEEE copyright form for each accepted paper</li>
              </ul>
              <p className="mt-4 text-gray-200">
                Deadline for Final Paper Submission: June 15, 2026
              </p>
              <p className="text-gray-200 mt-2">
                Register for the Conference: Before June 30, 2026
              </p>
            </section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                1. Prepare your final version
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  <strong>Formatting Instructions:</strong> Papers should not exceed <strong>SIX pages</strong>, including figures, tables and references.
                  IEEE is strict about the requirements for PDF files for inclusion in the IEEE Xplore® Digital Library.
                  Format your paper according to IEEE conference style guidelines. Use the A4 format.
                  <strong> DO NOT</strong> use the US Letter format and do not paginate your paper.
                </p>
                <p>
                  For more details about IEEE conference proceeding template and guidelines, please refer:{" "}
                  <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">
                    MS Word and Latex templates are HERE
                  </a>
                </p>
                <p>
                  Add the IEEE Copyright Notice in the footer section to the bottom of the first page of your paper,
                  prior to creating the final PDF version. Choose the appropriate notice from the following:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li>For papers in which all authors are employed by the US government, the copyright notice is: <strong>U.S. Government work not protected by U.S. copyright</strong></li>
                  <li>For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <strong>979-8-3195-0531-6/26/$31.00 ©2026 Crown</strong></li>
                  <li>For papers in which all authors are employed by the European Union, the copyright notice is: <strong>979-8-3195-0531-6/26/$31.00 ©2026 European Union</strong></li>
                  <li>For all other papers the copyright notice is: <strong>979-8-3195-0531-6/26/$31.00 ©2026 IEEE</strong></li>
                </ul>
                <p>
                  For more information on IEEE Copyright policy, click{" "}
                  <a href="https://www.ieee.org/publications/rights/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">HERE</a>.
                  Also review the IEEE Author Rights to Posting FAQ.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                2. PDF eXpress Online File Conversion
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  All papers submitted for publication must meet the IEEE standards. Access to PDF eXpress site, the
                  IEEE&apos;s online file conversion/PDF validation tool, will assist authors in preparing suitable electronic
                  files of their final papers. PDF eXpress helps authors convert their papers into IEEE Xplore-compatible
                  PDF files (conversion function) or to check their own PDF files for IEEE Xplore compatibility (PDF validation function).
                </p>
                <p>
                  All final manuscripts must be generated using the PDF Xpress tool. Submit your final, ready-for-publication paper{" "}
                  <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">HERE</a>.
                </p>
                <p>
                  <strong>To generate the IEEE Xplore compatible PDF file of your paper:</strong>
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li>Create your IEEE PDF eXpress account <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">here</a></li>
                  <li>Conference ID: <strong>70344X</strong></li>
                  <li>The first time you access the system, please follow the link to new user.</li>
                </ul>
                <p className="italic">
                  Please note that in order to access the service, you need to allow the use of cookies from the PDF eXpress web site.
                </p>
                <p>
                  <strong>Once you have registered as a new user:</strong>
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li>Upload the source file (containing your Camera-ready paper) for conversion.</li>
                  <li>Receive by e-mail the IEEE Xplore-compatible PDF of your paper.</li>
                </ul>
                <p>
                  <strong>Renaming your PDF File for Submission:</strong>
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li>The certified acceptable file you receive from PDF eXpress will be given a filename in the form <strong>PID123456.pdf</strong>.</li>
                  <li>You should rename this exact file to conform to the following naming convention: <strong>paperID.pdf</strong>, where the paperID is the ITCIndia paper ID (Easychair ID) assigned to the submission.</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                3. Complete and submit IEEE copyright form
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  IEEE policy requires that every submitted paper must be accompanied by a signed IEEE Copyright Form before publication can occur.
                  The electronic copyright submission form will walk you through the steps to complete and submit the IEEE copyright form for your paper.
                  Only one form is required per paper.
                </p>
                <p>
                  A LINK TO THE e-COPYRIGHT FORM WILL BE EMAILED TO ONLY A SINGLE CORRESPONDING AUTHOR FOR EACH PAPER.
                </p>
                <p>
                  Papers with more than one identified Corresponding Author will receive only one email regarding e-Copyright Form submission.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                4. Final Paper PDF File Submission
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  Submit your paper through PDF eXpress Plus and when you are happy with the PDF file, click on the &quot;approve for collection&quot; link.
                  Rename your file as explained in Step 2.
                </p>
                <p>
                  Please make sure that you are uploading the final paper (collected from PDF Express) into Easychair.
                </p>
                <p>
                  Deadline for Final Paper Submission: <strong>15th June, 2026</strong>.
                  This is a hard deadline for papers to be included in the ITC India 2026 Proceedings on IEEE Xplore.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                5. Register for the Conference
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  To be published in the ITC India 2026 Conference Proceedings, an author of an accepted paper is required
                  to register and must present the paper at the conference.{" "}
                  <Link href="/registration" className="text-blue-300 hover:text-blue-100 underline">
                    Register HERE
                  </Link>
                </p>
                <p>
                  Each paper is to be registered by at least one of the authors. If more than one author wishes to present
                  the same paper, each author needs to register separately.
                </p>
                <p>
                  <strong>Note:</strong> IEEE reserves the right to exclude a paper from distribution
                  after the conference, including IEEE Xplore® Digital Library, if the paper is not presented by the author
                  at the conference. Non-author, video conference, or pre-recorded presentations will not be included in the
                  conference proceedings.
                </p>
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="top-24 space-y-8">
              <div className="bg-[#1a4b7c] p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                  Important Dates
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-300 uppercase">
                      Camera Ready / Final Paper Submission
                    </p>
                    <p className="text-lg font-semibold">15th June, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 uppercase">
                      Registration Deadline
                    </p>
                    <p className="text-lg font-semibold">30th June, 2026</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-3">Policy on Plagiarism</h3>
                <p className="text-sm text-gray-300 text-justify">
                  All papers submitted to ITC India 2026 will be checked for plagiarism, inappropriate multiple submission,
                  and inappropriate use of previous work. Potential issues will be handled in accordance with the
                  IEEE Publication Services and Products Board Operations Manual.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm text-sm text-gray-300">
                <h4 className="font-bold text-white mb-2">Need Assistance?</h4>
                <p className="mb-4">
                  For any assistance relating to the camera-ready paper preparation, PDF Express, IEEE Copyright transfer submission, please feel free to contact:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="block text-white">Dr. Shylashree N</strong>
                    <a href="mailto:shylashreen@rvce.edu.in" className="text-blue-300 hover:text-blue-100 underline break-all">shylashreen@rvce.edu.in</a>
                  </p>
                  <p>
                    <strong className="block text-white">Lakshmanan Balasubramanian</strong>
                    <a href="mailto:lakshmanan@ieee.org" className="text-blue-300 hover:text-blue-100 underline break-all">lakshmanan@ieee.org</a>
                  </p>
                  <p>
                    <strong className="block text-white">Prof. Sivanantham Sathasivam</strong>
                    <a href="mailto:ssivanantham@vit.ac.in" className="text-blue-300 hover:text-blue-100 underline break-all">ssivanantham@vit.ac.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>We look forward to your contributions to ITC India 2026!</p>
        </div>
      </div>
    </main>
  );
}
