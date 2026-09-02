import { site, footer, navLinks } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-espresso text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-white/65">{footer.note}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-white/70 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-white/70">
          <p>WhatsApp</p>
          <a
            href={site.whatsappHref}
            className="mt-1 inline-block cursor-pointer text-white transition-colors duration-200 hover:text-gold-line"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/45 sm:px-8 lg:px-10">
          © {year} {site.brand}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
