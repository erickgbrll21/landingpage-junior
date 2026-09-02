"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { hero, site } from "@/data/content";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.from(".hero-title", { opacity: 0, y: 28, duration: 0.75 })
          .from(".hero-lead", { opacity: 0, y: 18, duration: 0.5 }, "-=0.35")
          .from(".hero-note", { opacity: 0, y: 14, duration: 0.45 }, "-=0.3")
          .from(".hero-actions", { opacity: 0, y: 14, duration: 0.45 }, "-=0.3");
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-espresso lg:block"
    >
      <div className="relative h-[46svh] w-full shrink-0 lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[68%_12%] lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-espresso to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,rgba(8,6,4,0.82)_0%,rgba(8,6,4,0.62)_26%,rgba(8,6,4,0.28)_46%,transparent_68%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block bg-[linear-gradient(to_top,rgba(8,6,4,0.55)_0%,rgba(8,6,4,0.12)_28%,transparent_52%)]"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 lg:absolute lg:inset-0 lg:mx-auto lg:max-w-6xl lg:justify-center lg:px-10 lg:py-20">
        <div className="relative max-w-xl lg:max-w-[40rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-10 -left-8 -right-6 hidden rounded-[2rem] bg-[linear-gradient(90deg,rgba(8,6,4,0.48)_0%,rgba(8,6,4,0.26)_62%,transparent_100%)] blur-xl lg:block"
          />
          <h1 className="hero-title font-sans relative text-[1.95rem] leading-[1.16] font-bold tracking-tight text-white sm:text-[2.7rem] lg:text-[3.4rem] [text-shadow:0_2px_3px_rgba(0,0,0,0.5),0_8px_22px_rgba(0,0,0,0.28)]">
            Transforme sua{" "}
            <span className="text-hero-gold [text-shadow:0_2px_3px_rgba(0,0,0,0.52),0_8px_20px_rgba(0,0,0,0.28)]">
              padaria
            </span>{" "}
            com a mentoria que já mudou{" "}
            <span className="text-hero-gold [text-shadow:0_2px_3px_rgba(0,0,0,0.52),0_8px_20px_rgba(0,0,0,0.28)]">
              centenas
            </span>{" "}
            de negócios
          </h1>
          <p className="hero-lead relative mt-4 text-base leading-snug font-medium text-white/80 sm:mt-5 sm:text-xl [text-shadow:0_2px_3px_rgba(0,0,0,0.85)]">
            A experiência de Júnior Maffille agora ao seu alcance.
          </p>
          <p className="hero-note relative mt-2.5 text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-base [text-shadow:0_2px_3px_rgba(0,0,0,0.85)]">
            De prejuízo ao crescimento de até{" "}
            <span className="font-semibold text-hero-gold">3x</span> em apenas{" "}
            <span className="font-semibold text-hero-gold">6 meses</span>.
          </p>

          <div className="hero-actions relative mt-7 sm:mt-8">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#d4a45a_0%,#c19a5b_42%,#a16207_100%)] px-8 py-4 text-white shadow-[0_10px_28px_rgba(161,98,7,0.38)] transition-all duration-200 hover:brightness-110 sm:w-auto"
            >
              <span className="text-[0.7rem] font-bold tracking-[0.14em] uppercase sm:text-xs">
                {hero.primaryCta}
              </span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
