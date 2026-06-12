import Image from "next/image";

export default function BoothExhibitorsToolkit() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">

        {/* Header */}
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
              Booth Exhibitors Toolkit
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-semibold text-[#6aaff1]">
            Expoplato Mobile App Demo & Resources
          </p>

          <h2 className="text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white">
            Exhibitor Application Demo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* Benefits */}
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Benefits to Exhibitors
              </h3>

              <p className="text-gray-200 mb-5">
                A user-friendly mobile application to scan delegate badges and
                instantly collect important information including name,
                company, email and mobile number.
              </p>

              <ul className="list-disc ml-5 space-y-3 text-gray-200">
                <li>Download visitor data instantly in Excel/CSV format</li>
                <li>Save contact details with a single click</li>
                <li>Write digital notes and rate prospects</li>
                <li>Save time and connect digitally with prospects</li>
              </ul>
            </section>

            {/* Installation */}
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                App Installation
              </h3>

              <div className="space-y-4 text-gray-200">
                <p>1. Install the app on your phone</p>
                <p>2. Your account will be configured</p>
                <p>3. Open the app and login</p>
                <p>4. Internet connection (4G/5G) is required for scanning</p>
              </div>
            </section>

            {/* Login Help */}
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Login & Password Help
              </h3>

              <ul className="list-disc ml-5 space-y-3 text-gray-200">
                <li>Click on “Forgot Password”</li>
                <li>Enter registered email ID</li>
                <li>Password will be sent via email</li>
                <li>Login using registered credentials</li>
              </ul>
            </section>

            {/* Things to Remember */}
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Things to Remember
              </h3>

              <ul className="list-disc ml-5 space-y-3 text-gray-200">
                <li>
                  Do not uninstall the app after login or data may be lost.
                </li>

                <li>
                  One login works on one device only.
                </li>

                <li>
                  Avoid logging into multiple phones with the same account.
                </li>

                <li>
                  iPhone users can find Excel downloads in:
                  Files → On My iPhone → Expoplato Folder
                </li>
              </ul>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">

            {/* Downloads */}
            <div className="bg-[#1a4b7c] p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg top-24">
              <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                Downloads
              </h3>

              <p className="text-sm text-gray-200 mb-6">
                Download the exhibitor resources and demo material.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="/Booth-Exhibitor-Application-Demo.pdf"
                  download
                  className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black hover:bg-gray-100 transition"
                >
                  Download PDF
                </a>

                <a
                  href="/videos/expoPlato.mp4"
                  download
                  className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black hover:bg-gray-100 transition"
                >
                  Download Video
                </a>
              </div>
            </div>

            {/* Help */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm text-sm text-gray-300">
              <h4 className="font-bold text-white mb-2">
                Need Help?
              </h4>

              <p className="mb-4">
                If you face issues with the app, avoid uninstalling it and
                contact the registration counter during the event.
              </p>

              <div className="space-y-2">
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Email
                  </span>
                  stuti@expoplato.com
                </p>

                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Contact
                  </span>
                  +91 9179109484
                </p>
              </div>
            </div>

            {/* Demo Video */}
            <div className="bg-white/5 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
            <h4 className="font-bold text-white mb-4 border-b border-white/20 pb-2">
                Demo Video
            </h4>

            <video
                className="w-full rounded-xl"
                src="/videos/expoPlato.mp4"
                autoPlay
                muted
                loop
                controls
                playsInline
            />

            <p className="text-xs text-gray-400 mt-3">
                Quick walkthrough of the Exhibitor App usage.
            </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}