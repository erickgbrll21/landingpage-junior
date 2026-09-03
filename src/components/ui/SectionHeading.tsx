type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <header
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
          isDark ? "text-gold-line" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-sans mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/75" : "text-muted"
          }`}
        >
          {body}
        </p>
      ) : null}
    </header>
  );
}
