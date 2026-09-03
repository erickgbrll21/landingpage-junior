import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/content";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: readonly LegalSection[];
};

export function LegalPage({ title, updatedAt, intro, sections }: LegalPageProps) {
  return (
    <main id="conteudo" className="py-16 sm:py-20 lg:py-24">
      <Container as="article" className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            {site.brand}
          </p>
          <h1 className="font-sans mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Última atualização: {updatedAt}</p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">{intro}</p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sans text-xl font-semibold tracking-tight text-ink">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
