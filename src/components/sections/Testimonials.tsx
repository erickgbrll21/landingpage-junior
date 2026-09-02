import { testimonials } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export function Testimonials() {
  const featured = testimonials.items.slice(0, 2);
  const rest = testimonials.items.slice(2);

  return (
    <section id={testimonials.id} className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured.map((item) => (
            <blockquote
              key={item.name}
              className="reveal-child rounded-2xl bg-espresso p-8 text-white sm:p-10"
            >
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                “{item.quote}”
              </p>
              <footer className="mt-8 border-t border-white/10 pt-5">
                <cite className="not-italic">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-white/65">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((item) => (
            <blockquote
              key={item.name}
              className="reveal-child rounded-2xl border border-line bg-card p-6"
            >
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                “{item.quote}”
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
