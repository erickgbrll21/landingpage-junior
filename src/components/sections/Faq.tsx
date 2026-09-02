"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id={faq.id} className="border-t border-line py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {faq.items.map((item, index) => {
              const isOpen = open === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink transition-colors duration-200 hover:text-accent"
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      {item.question}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-5"
                  >
                    <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
