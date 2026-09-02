import { ArrowUpRight } from "lucide-react";
import { offer, site } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Offer() {
  return (
    <section
      id={offer.id}
      className="grain relative overflow-hidden bg-espresso py-20 text-white lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.18),transparent_70%)]"
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-line">
              {offer.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
              {offer.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              {offer.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={site.whatsappHref} className="w-full sm:w-auto">
                {offer.primaryCta}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button
                href={site.whatsappHref}
                variant="on-dark"
                className="w-full sm:w-auto"
              >
                {offer.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
