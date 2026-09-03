import Image from "next/image";
import { offer } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppLeadForm } from "@/components/sections/WhatsAppLeadForm";

export function Offer() {
  return (
    <section
      id={offer.id}
      className="grain relative isolate overflow-hidden py-20 text-white lg:py-28"
    >
      <Image
        src="/images/offer-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,4,0.72)_0%,rgba(8,6,4,0.82)_45%,rgba(8,6,4,0.9)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(193,154,91,0.16),transparent_55%)]"
      />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-line">
              {offer.eyebrow}
            </p>
            <h2 className="font-sans mt-4 text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {offer.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              {offer.body}
            </p>
            <WhatsAppLeadForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
