import Link from "next/link";
import { ClosedAuthorButton } from "@/components/ui/ClosedAuthorButton";
import { closedDeadlineTooltip } from "@/lib/authorDeadlines";
 
export type AuthorActionButtonVariant =
  | "primary"
  | "secondary"
  | "hero-primary"
  | "hero-secondary"
  | "inline-primary"
  | "inline-secondary";

const activeClasses: Record<AuthorActionButtonVariant, string> = {
  primary:
    "block w-full bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-center py-3 rounded transition-colors",
  secondary:
    "block w-full bg-transparent border-2 border-[#6aaff1] hover:bg-[#6aaff1]/20 text-white font-bold text-center py-3 rounded transition-colors",
  "hero-primary":
    "w-full sm:w-auto bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] text-base md:text-lg font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(106,175,241,0.3)] transition-all duration-300 uppercase tracking-wider",
  "hero-secondary":
    "w-full sm:w-auto bg-transparent hover:bg-white/10 text-white text-base md:text-lg font-bold py-4 px-8 border-2 border-white/50 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 uppercase tracking-wider",
  "inline-primary":
    "flex-1 text-center bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold py-3 px-6 rounded-lg transition-colors",
  "inline-secondary":
    "flex-1 text-center bg-transparent border border-[#6aaff1] text-[#6aaff1] hover:bg-[#6aaff1] hover:text-[#03396c] py-2 px-4 rounded transition-colors text-sm font-medium",
};

type AuthorActionButtonProps = {
  closed: boolean;
  href: string;
  download?: string;
  deadline?: Date;
  variant?: AuthorActionButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function AuthorActionButton({
  closed,
  href,
  download,
  deadline,
  variant = "primary",
  className = "",
  children,
}: AuthorActionButtonProps) {
  if (closed) {
    return (
      <ClosedAuthorButton
        variant={variant}
        className={className}
        title={deadline ? closedDeadlineTooltip(deadline) : undefined}
      >
        {children}
      </ClosedAuthorButton>
    );
  }

  const classes = `${activeClasses[variant]} ${className}`.trim();

  if (href.startsWith("/")) {
    return (
      <Link href={href} download={download} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      download={download}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </a>
  );
}
