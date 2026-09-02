import Image from "next/image";
import { results } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export function Results() {
  return (
    <section id={results.id} className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={results.eyebrow}
            title={results.title}
            body={results.body}
          />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {results.metrics.map((metric) => (
            <article
              key={metric.label}
              className="reveal-child bg-card px-5 py-8 sm:px-7 sm:py-10"
            >
              <p className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-muted">{metric.label}</p>
            </article>
          ))}
        </RevealGroup>

        <div className="mt-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Nossa operação em imagens
          </p>
          <RevealGroup className="mt-6 grid gap-5 md:grid-cols-3">
            {results.photos.map((photo) => (
              <figure key={photo.src} className="reveal-child group">
                <div className="overflow-hidden rounded-2xl bg-paper-deep">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={640}
                    className="aspect-[5/4] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 32vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
