"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/lib/AuthContext";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  {
    name: "PROGRAM",
    href: "#",
    dropdown: [
      { name: "Agenda", href: "/agenda" },
      { name: "Keynote", href: "/keynote" },
    ],
  },
  { name: "REGISTRATION", href: "/registration" },
  { name: "COMMITTEE", href: "/committee" },
  {
    name: "AUTHORS",
    href: "#",
    dropdown: [
      { name: "Call For Papers", href: "/cfp" },
      { name: "Call For Tutorials", href: "/cft" },
      { name: "Academia Research Track", href: "/art" },
      { name: "Call For Posters", href: "/call-for-posters" },
      { name: "Call For Workshop", href: "/call-for-workshop" },
      { name: "IEEE ITC Hackathon", href: "/hackathon" },
      { name: "IEEE ITC Fellowship", href: "/fellowship" },
      { name: "Author Kit", href: "/author-kit" },
    ],
  },
  {
    name: "SPONSORSHIP",
    href: "#",
    dropdown: [
      { name: "Our Sponsors ", href: "/sponsors" },
      { name: "Call for Sponsors", href: "/call-for-sponsors" },
    ],
  },
  {
    name: "ARCHIVES",
    href: "#",
    dropdown: [
      { name: "ITC 2025", href: "https://itc-2025.vercel.app/" },
      { name: "ITC 2024", href: "/archives/itc_2024_archive/itc_2024.html" },
      { name: "ITC 2023", href: "/archives/itcindia2023/index.html" },
      { name: "ITC 2022", href: "/archives/itc_2022/itctestweekindia.org/index.html" },
      { name: "ITC 2021", href: "/archives/itc_2021/index.html" },
    ],
  },
  { name: "CONTACT US", href: "/contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 sm:h-7 sm:w-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const mobileHeader = (
    <header className="fixed inset-x-0 top-0 z-[9999] box-border w-full max-w-[100vw] border-b-2 border-white bg-[#03396c] lg:hidden">
      <nav
        className="mx-auto flex h-14 w-full max-w-[100vw] items-center justify-between gap-3 px-3 sm:h-[60px] sm:px-4"
        aria-label="Mobile primary"
      >
        <div className="relative h-7 w-[88px] shrink-0 sm:h-8 sm:w-[100px]">
          <Link href="/" onClick={closeMobileMenu} className="block h-full w-full">
            <Image
              src="/images/ieee-logo.svg"
              alt="IEEE Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-white/90 bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-colors hover:bg-white/20 active:bg-white/30 touch-manipulation"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
        >
          <HamburgerIcon open={isMobileMenuOpen} />
        </button>
      </nav>
    </header>
  );

  const mobileMenuPanel = isMobileMenuOpen ? (
    <div
      id="mobile-nav-panel"
      className="fixed inset-x-0 top-14 z-[9998] box-border max-h-[calc(100dvh-3.5rem)] w-full max-w-[100vw] overflow-y-auto border-b-2 border-white bg-[#03396c] shadow-lg sm:top-[60px] sm:max-h-[calc(100dvh-60px)] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex flex-col pb-4">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.dropdown ? (
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(link.name)}
                  className="flex min-h-[48px] w-full touch-manipulation items-center justify-between border-b border-white/20 px-4 py-3.5 text-left font-poppins text-base font-bold text-white transition-colors hover:bg-white/10 active:bg-white/20 sm:py-4 sm:text-lg"
                >
                  {link.name}
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      activeMobileDropdown === link.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeMobileDropdown === link.name && (
                  <div className="border-b border-white/20 bg-[#022241]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-8 py-3 font-poppins text-[15px] font-medium text-gray-200 hover:bg-white/10 hover:text-white sm:text-base"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href!}
                onClick={closeMobileMenu}
                className="flex min-h-[48px] touch-manipulation items-center border-b border-white/20 px-4 py-3.5 font-poppins text-base font-bold text-white transition-colors hover:bg-white/10 active:bg-white/20 sm:py-4 sm:text-lg"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}

        {user &&
          (pathname === "/fellowship" ||
            pathname === "/fellowship/register" ||
            pathname === "/dashboard") && (
            <div className="flex flex-col gap-2 border-t border-white/20 px-4 pt-4">
              {(pathname === "/fellowship" ||
                pathname === "/fellowship/register") && (
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    router.push("/dashboard");
                  }}
                  className="rounded-full bg-white px-4 py-3 font-poppins text-sm font-semibold text-black"
                >
                  Dashboard
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  handleSignOut();
                }}
                className="rounded-full bg-white px-4 py-3 font-poppins text-sm font-semibold text-black"
              >
                Sign Out
              </button>
            </div>
          )}
      </div>
    </div>
  ) : null;

  const mobileMenuBackdrop = isMobileMenuOpen ? (
    <button
      type="button"
      className="fixed inset-0 z-[9997] bg-black/40 lg:hidden"
      aria-label="Close menu"
      onClick={closeMobileMenu}
    />
  ) : null;

  return (
    <>
      {/* Desktop navigation */}
      <nav
        className="fixed top-7 left-1/2 z-[100] hidden h-[68px] w-fit max-w-[calc(100vw-1.5rem)] -translate-x-1/2 flex-row items-center border-2 border-white bg-[#03396c]/40 px-7 backdrop-blur-md transition-all duration-300 lg:flex lg:px-10"
        aria-label="Primary"
      >
        <div className="flex h-full items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="group relative flex h-full items-center"
            >
              {link.dropdown ? (
                <div className="group relative flex h-full cursor-pointer items-center">
                  <span className="flex items-center gap-1.5 font-poppins text-[15px] font-bold uppercase tracking-wide text-white transition-colors group-hover:text-gray-200 lg:text-[16px]">
                    {link.name}
                    <svg
                      className="mt-0.5 h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <div className="invisible absolute top-full left-0 mt-0 w-56 origin-top transform rounded-b-md border border-white/20 bg-[#03396c]/95 pt-2 opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="flex flex-col py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="whitespace-nowrap px-6 py-3 font-poppins text-sm font-medium text-white hover:bg-white/10"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href!}
                  className="whitespace-nowrap font-poppins text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:text-gray-200 lg:text-[16px]"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        {user &&
          (pathname === "/fellowship" ||
            pathname === "/fellowship/register" ||
            pathname === "/dashboard") && (
            <div className="ml-5 flex shrink-0 gap-2 border-l border-white/35 pl-5 lg:ml-8 lg:gap-3 lg:pl-8">
              {(pathname === "/fellowship" ||
                pathname === "/fellowship/register") && (
                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="rounded-full bg-white px-4 py-2 font-poppins text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-gray-100"
                >
                  Dashboard
                </button>
              )}
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-full bg-white px-4 py-2 font-poppins text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
      </nav>

      {/* Mobile navigation — portaled to body so it stays above all page content */}
      {mounted &&
        createPortal(
          <>
            {mobileHeader}
            {mobileMenuBackdrop}
            {mobileMenuPanel}
          </>,
          document.body,
        )}

      {/* Spacer so page content clears the fixed mobile header */}
      <div className="h-14 shrink-0 lg:hidden sm:h-[60px]" aria-hidden />
    </>
  );
}
