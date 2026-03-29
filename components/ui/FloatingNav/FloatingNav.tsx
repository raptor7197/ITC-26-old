"use client";

import { useState, useEffect } from "react";

function getScrollY(): number {
  return window.scrollY ?? document.documentElement.scrollTop ?? 0;
}

/** Document Y of element’s top (works with `overflow-x: hidden` on html). */
function elementDocumentTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + getScrollY();
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "photos", label: "Photos" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getScrollY();
      const about = document.getElementById("about");
      const probe = scrollY + Math.min(200, window.innerHeight * 0.22);

      let nextActive = "hero";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = elementDocumentTop(element);
        const bottom = top + element.offsetHeight;
        if (probe >= top && probe < bottom) {
          nextActive = section.id;
          break;
        }
      }
      setActiveSection(nextActive);

      if (about) {
        const aboutTop = elementDocumentTop(about);
        const viewportBottom = scrollY + window.innerHeight;
        const pastAbout = viewportBottom >= aboutTop;
        setIsVisible(pastAbout && nextActive !== "hero");
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 100;
    const top = element.getBoundingClientRect().top + getScrollY() - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-300 sm:right-10 sm:block md:right-12 lg:right-14 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-20 opacity-0"
      }`}
    >
      <nav className="rounded-full border-2 border-white/30 bg-[#03396c]/95 px-3 py-4 shadow-lg backdrop-blur-md">
        <ul className="flex flex-col gap-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center"
                aria-label={`Navigate to ${section.label}`}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                    activeSection === section.id
                      ? "scale-125 border-white bg-white"
                      : "border-white/50 bg-transparent hover:border-white hover:bg-white/20"
                  }`}
                />

                <span
                  className={`absolute right-full mr-4 rounded-md bg-white px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-[#03396c] shadow-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                  <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 translate-x-full border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
