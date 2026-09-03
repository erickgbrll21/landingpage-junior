import { PackageCheck, Receipt, Repeat2, Users } from "lucide-react";
import { results } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SqueezeCarousel } from "@/components/ui/SqueezeCarousel";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

const metricIcons = [Receipt, Users, PackageCheck, Repeat2];

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

        <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {results.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <article
                key={metric.label}
                className="reveal-child group relative overflow-hidden rounded-2xl bg-espresso px-5 py-7 shadow-[0_18px_40px_rgba(20,17,14,0.22)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:px-6 sm:py-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(193,154,91,0.38),transparent_68%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(165deg,rgba(193,154,91,0.16)_0%,transparent_42%)]"
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[0.62rem] font-semibold tracking-[0.22em] text-gold-line uppercase">
                    0{index + 1}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-hero-gold/25 bg-hero-gold/10 text-hero-gold">
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="font-sans relative mt-6 text-[2.6rem] leading-none font-bold tracking-tight text-hero-gold sm:text-5xl">
                  {metric.value}
                </p>
                <p className="relative mt-3 max-w-[12rem] text-sm leading-snug text-white/72">
                  {metric.label}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-hero-gold via-hero-gold/50 to-transparent sm:inset-x-6"
                />
              </article>
            );
          })}
        </RevealGroup>

        <div className="mt-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Nossa operação em imagens
          </p>
          <Reveal className="mt-6">
            <SqueezeCarousel
              slides={results.photos.map((photo) => ({
                id: photo.src,
                title: photo.caption,
                image: photo.src,
                imageAlt: photo.alt,
              }))}
              label="Nossa operação em imagens"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
