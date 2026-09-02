import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "on-dark";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-on-accent shadow-[0_10px_24px_rgba(161,98,7,0.28)] hover:bg-accent-hover hover:-translate-y-px",
  secondary:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  ghost:
    "border border-line bg-transparent text-ink hover:border-ink hover:bg-paper-deep",
  "on-dark":
    "border border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("https://wa.me"));

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 text-center text-sm font-semibold tracking-wide transition-all duration-200 ease-out ${variants[variant]} ${className}`}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
