import { BarChart3, Compass, Handshake, Target } from "lucide-react";
import { benefits } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

const icons = [BarChart3, Compass, Handshake, Target];

export function Benefits() {
  return (
    <section className="border-y border-line bg-paper-deep/50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={benefits.eyebrow}
            title={benefits.title}
            align="center"
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="reveal-child rounded-2xl border border-line bg-card p-7 shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-paper-deep text-accent">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
