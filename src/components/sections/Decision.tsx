import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { decision, site } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ImageAccordion } from "@/components/sections/ImageAccordion";

export function Decision() {
  return (
    <section
      id={decision.id}
      className="grain relative overflow-hidden bg-espresso text-white"
    >
      <div className="grid items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="px-5 pt-20 pb-4 sm:px-8 lg:flex lg:flex-col lg:justify-center lg:py-28 lg:pr-12 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]">
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
        </div>

        <Reveal className="mt-8 flex w-full items-center justify-end lg:mt-0 lg:self-center">
          <Image
            src={decision.image.src}
            alt={decision.image.alt}
            width={900}
            height={1100}
            sizes="(max-width: 1024px) 70vw, 28rem"
            className="h-auto w-[min(90%,26rem)] object-contain object-right sm:w-[min(80%,30rem)] lg:w-[min(100%,38rem)]"
          />
        </Reveal>
      </div>

      <Container className="mt-16 pb-20 lg:pb-28">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center">
          <Reveal className="w-full lg:w-1/2">
            <SectionHeading
              eyebrow={decision.vision.title}
              title={decision.vision.text}
              body={decision.vision.body}
              tone="dark"
            />
            <div className="mt-8">
              <Button href={site.whatsappHref}>
                {decision.cta}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-1/2" delay={0.08}>
            <ImageAccordion items={decision.vision.items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
