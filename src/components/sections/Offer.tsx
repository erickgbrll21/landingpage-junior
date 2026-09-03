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
        src="/images/offer-form-bg-mobile.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[70%_center] lg:hidden"
      />
      <Image
        src="/images/offer-form-bg.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="hidden object-cover object-[80%_center] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,4,0.22)_0%,rgba(8,6,4,0.06)_48%,transparent_78%)] lg:bg-[linear-gradient(90deg,rgba(8,6,4,0.28)_0%,rgba(8,6,4,0.08)_42%,transparent_72%)]"
      />
      <Container className="relative z-10">
        <Reveal>
          <div className="w-full max-w-xl text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-line">
              {offer.eyebrow}
            </p>
            <h2 className="font-sans mt-4 text-[1.85rem] leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {offer.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-lg">
              {offer.body}
            </p>
            <WhatsAppLeadForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
