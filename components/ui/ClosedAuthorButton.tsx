type ClosedAuthorButtonVariant =
  | "primary"
  | "secondary"
  | "hero-primary"
  | "hero-secondary"
  | "inline-primary"
  | "inline-secondary";

const variantClasses: Record<ClosedAuthorButtonVariant, string> = {
  primary:
    "block w-full bg-[#6aaff1]/25 text-[#03396c]/45 font-bold text-center py-3 rounded cursor-not-allowed opacity-70",
  secondary:
    "block w-full bg-transparent border-2 border-[#6aaff1]/25 text-gray-500 font-bold text-center py-3 rounded cursor-not-allowed opacity-70",
  "hero-primary":
    "w-full sm:w-auto bg-white/10 text-white/60 text-base md:text-lg font-bold py-4 px-8 rounded-lg cursor-not-allowed uppercase tracking-wider opacity-70",
  "hero-secondary":
    "w-full sm:w-auto bg-transparent text-gray-500 text-base md:text-lg font-bold py-4 px-8 border-2 border-white/20 rounded-lg cursor-not-allowed uppercase tracking-wider opacity-70",
  "inline-primary":
    "flex-1 text-center bg-[#6aaff1]/25 text-[#03396c]/45 font-bold py-3 px-6 rounded-lg cursor-not-allowed opacity-70",
  "inline-secondary":
    "flex-1 text-center bg-transparent border border-[#6aaff1]/25 text-gray-500 py-2 px-4 rounded cursor-not-allowed text-sm font-medium opacity-70",
};

const wrapperClasses: Record<ClosedAuthorButtonVariant, string> = {
  primary: "block w-full",
  secondary: "block w-full",
  "hero-primary": "block w-full sm:w-auto",
  "hero-secondary": "block w-full sm:w-auto",
  "inline-primary": "flex-1 min-w-0",
  "inline-secondary": "flex-1 min-w-0",
};

const DEFAULT_TOOLTIP = "The submission deadline has passed.";

type ClosedAuthorButtonProps = {
  children: React.ReactNode;
  variant?: ClosedAuthorButtonVariant;
  className?: string;
  title?: string;
};

export function ClosedAuthorButton({
  children,
  variant = "primary",
  className = "",
  title = DEFAULT_TOOLTIP,
}: ClosedAuthorButtonProps) {
  return (
    <span
      title={title}
      className={`${wrapperClasses[variant]} ${className}`.trim()}
    >
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={
          typeof children === "string" ? `${children}. ${title}` : title
        }
        className={`${variantClasses[variant]} w-full`}
      >
        {children}
      </button>
    </span>
  );
}
