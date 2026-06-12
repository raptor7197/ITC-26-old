import Link from "next/link";

const REGISTER_PORTAL_URL = "https://itc.expoplato.com/";
const REGISTER_EVENTS_URL = "https://itc.expoplato.com/events";

function RegistrationHeadingLink({
  href,
  external = false,
  title,
  srLabel,
  compact = false,
  alignStart = false,
}: {
  href: string;
  external?: boolean;
  title: string;
  srLabel: string;
  compact?: boolean;
  alignStart?: boolean;
}) {
  const titleSize = compact
    ? "text-2xl sm:text-3xl md:text-4xl"
    : "text-3xl md:text-5xl";

  const iconSize = compact
    ? "h-7 w-7 sm:h-8 sm:w-8"
    : "h-8 w-8 sm:h-9 sm:w-9";

  const HeadingTag = compact ? "span" : "h2";

  const inner = (
    <>
      <span className="sr-only">{srLabel}</span>
      <HeadingTag
        className={`inline-flex items-center justify-center gap-2 sm:gap-2.5 font-bold font-poppins tracking-tight uppercase leading-none ${titleSize}`}
      >
        <span className="text-white transition-colors duration-200 group-hover:text-[#90cbfb]">
          Registration
        </span>
        <span
          className={`flex ${iconSize} shrink-0 -translate-x-0.5 -translate-y-px sm:-translate-y-0.5 items-center justify-center rounded-full border border-[#6aaff1]/35 bg-white/5 transition-all duration-200 group-hover:border-[#6aaff1] group-hover:bg-[#6aaff1]/15`}
          aria-hidden
        >
          {external ? (
            <svg
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6aaff1] transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          ) : (
            <svg
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6aaff1] transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </span>
      </HeadingTag>
      <div
        className={`h-1 w-24 rounded-full bg-[#6aaff1] mt-4 transition-all duration-200 group-hover:w-28 ${alignStart ? "self-center sm:self-start" : "mx-auto"}`}
      />
    </>
  );

  const linkClass =
    "group inline-flex flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-[#6aaff1] focus-visible:outline-offset-4 " +
    (alignStart ? "items-center sm:items-start" : "items-center");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={linkClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} title={title} className={linkClass}>
      {inner}
    </Link>
  );
}

export default function RegistrationHeroCTA({
  compact = false,
  variant = "portal",
}: {
  compact?: boolean;
  variant?: "portal" | "page";
}) {
  const wrapperClass = compact
    ? "mt-6 sm:mt-7 mb-6 sm:mb-8 w-full flex justify-center sm:justify-start"
    : "mb-10 sm:mb-14 text-center";

  if (variant === "page") {
    return (
      <div className={wrapperClass}>
        <Link
          href="/registration"
          role="button"
          title="View Registration Details"
          className="hero-register-btn"
        >
          <span className="hero-register-btn-text">Register Now</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <RegistrationHeadingLink
        href={REGISTER_PORTAL_URL}
        external
        title="Open official registration portal"
        srLabel="Opens official registration portal"
        compact={compact}
      />
    </div>
  );
}
