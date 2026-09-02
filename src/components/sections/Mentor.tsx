import Image from "next/image";
import { mentor } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

function MentorQuote({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <blockquote className={compact ? "max-w-none" : "mt-4 max-w-md sm:mt-8"}>
        <p
          className={
            compact
              ? "font-display text-[0.95rem] leading-snug text-ink italic"
              : "font-display text-[1.05rem] leading-snug text-ink italic sm:text-2xl lg:text-[1.85rem] lg:leading-[1.28]"
          }
        >
          <span
            aria-hidden="true"
            className="mr-1 font-semibold text-hero-gold not-italic"
          >
            “
          </span>
          {mentor.quote}
        </p>
        <footer
          className={
            compact
              ? "mt-2 flex items-center gap-2"
              : "mt-2.5 flex items-center gap-2.5 sm:mt-4"
          }
        >
          <span
            aria-hidden="true"
            className={
              compact
                ? "h-px w-5 shrink-0 bg-hero-gold"
                : "h-px w-6 shrink-0 bg-hero-gold sm:w-8"
            }
          />
          <cite
            className={
              compact
                ? "text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase not-italic"
                : "text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase not-italic sm:text-xs"
            }
          >
            {mentor.author}
          </cite>
        </footer>
      </blockquote>

      <div
        className={
          compact
            ? "mt-1.5 flex flex-row flex-nowrap items-center gap-x-5"
            : "mt-5 flex flex-wrap items-center gap-4 self-start sm:mt-7 sm:gap-6"
        }
      >
        <a
          href={mentor.logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-sm outline-offset-4 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Abrir o site da Padaria Maffille"
        >
          <Image
            src={mentor.logo.src}
            alt={mentor.logo.alt}
            width={301}
            height={94}
            className="h-5 w-auto max-w-[5.75rem] object-contain object-left sm:h-7 sm:max-w-[8.5rem] lg:h-8 lg:max-w-[9.5rem]"
          />
        </a>
        <a
          href={mentor.panifairLogo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-sm outline-offset-4 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Abrir o site da PANIFAIR"
        >
          <Image
            src={mentor.panifairLogo.src}
            alt={mentor.panifairLogo.alt}
            width={549}
            height={203}
            unoptimized
            className="h-6 w-auto max-w-[7.25rem] object-contain object-left sm:h-9 sm:max-w-[11rem] lg:h-10 lg:max-w-[12.5rem]"
          />
        </a>
      </div>
    </>
  );
}

export function Mentor() {
  return (
    <section
      id={mentor.id}
      className="relative overflow-hidden bg-paper-deep pt-12 sm:pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(193,154,91,0.22),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply bg-[url('/images/cases/1.jpg')] bg-cover bg-center blur-2xl scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-paper-deep/82"
      />

      <div className="relative grid w-full grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-stretch lg:min-h-[40rem] lg:grid-cols-[28rem_minmax(0,1fr)] xl:grid-cols-[32rem_minmax(0,1fr)]">
        <Reveal className="col-span-2 px-5 pt-2 pb-2 sm:px-8 sm:pb-4 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-center lg:py-20 lg:pr-12 lg:pl-20 xl:pl-24">
          <h2 className="font-display max-w-xl text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-ink sm:text-3xl lg:text-[3.15rem]">
            {mentor.title}
          </h2>
          <div className="mt-4 max-w-lg space-y-3 text-sm leading-relaxed text-ink-soft text-justify sm:mt-5 sm:space-y-4 lg:mt-6 lg:text-base">
            {mentor.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hidden lg:block">
            <MentorQuote />
          </div>
        </Reveal>

        <div className="relative h-[18rem] w-full sm:h-[24rem] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-[40rem]">
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] left-[10%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,252,247,0.95)_0%,rgba(193,154,91,0.28)_45%,transparent_70%)] blur-2xl sm:h-80 sm:w-80"
          />
          <Image
            src={mentor.portrait.src}
            alt={mentor.portrait.alt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 55vw, 32rem"
            className="object-contain object-left-bottom"
          />
        </div>

        <div className="mt-4 flex flex-col justify-start pt-2 pr-4 pb-4 pl-2 sm:mt-6 sm:pr-8 lg:hidden">
          <MentorQuote compact />
        </div>
      </div>
    </section>
  );
}
