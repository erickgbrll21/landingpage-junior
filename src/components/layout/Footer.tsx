import Link from "next/link";
import { footer, site } from "@/data/content";

const linkClass =
  "underline decoration-white/35 underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-white/70";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-espresso py-12 text-white/55 sm:py-14">
      <div className="mx-auto max-w-3xl px-5 text-center text-xs leading-relaxed sm:px-8 sm:text-[0.8125rem] lg:px-10">
        <p>{footer.disclaimer}</p>

        <p className="mt-6">{footer.company}</p>
        <p className="mt-1">{footer.location}</p>

        <p className="mt-6">
          Contato:{" "}
          <a href={`mailto:${footer.contact.email}`} className={linkClass}>
            {footer.contact.emailLabel}
          </a>{" "}
          · WhatsApp:{" "}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {site.phoneDisplay}
          </a>
        </p>

        <p className="mt-6">
          {footer.legal.prefix}{" "}
          <Link href={footer.legal.termsHref} className={linkClass}>
            {footer.legal.terms}
          </Link>{" "}
          {footer.legal.and}{" "}
          <Link href={footer.legal.privacyHref} className={linkClass}>
            {footer.legal.privacy}
          </Link>
          {footer.legal.suffix}
        </p>
      </div>
    </footer>
  );
}
