import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { decision, site } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export function Decision() {
  return (
    <section
      id={decision.id}
      className="grain relative overflow-hidden bg-espresso py-20 text-white lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <Image
                src={decision.image.src}
                alt={decision.image.alt}
                width={900}
                height={1100}
                className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/6]"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow={decision.eyebrow}
                title={decision.title}
                body={decision.body}
                tone="dark"
              />
            </Reveal>

            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
              {decision.pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="reveal-child rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-gold-line uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{pillar.text}</p>
                </article>
              ))}
            </RevealGroup>

            <Reveal className="mt-8">
              <Button href={site.whatsappHref}>
                {decision.cta}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="grid overflow-hidden rounded-[1.4rem] border border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
            <Image
              src={decision.vision.src}
              alt={decision.vision.alt}
              width={800}
              height={640}
              className="h-full min-h-[240px] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="flex flex-col justify-center bg-espresso-soft p-8 sm:p-12">
              <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold-line uppercase">
                {decision.vision.title}
              </p>
              <p className="font-display mt-4 text-3xl leading-snug text-white sm:text-4xl">
                {decision.vision.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
