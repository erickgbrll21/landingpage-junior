"use client";

import {
  type ComponentProps,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export type SqueezeSlide = {
  id?: string | number;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  background?: string;
  overlay?: ReactNode;
  action?: string;
  href?: string;
  target?: string;
  onAction?: () => void;
};

type Size = number | string;

const size = (value: Size) => (typeof value === "number" ? `${value}px` : value);

const LAYOUTS: Record<
  number,
  { base: number[]; stretched: number[]; squeezed: number[] }
> = {
  2: {
    base: [-0.02, 0.9],
    stretched: [0, 1],
    squeezed: [-0.08, 0.82],
  },
  3: {
    base: [-0.04, 0.62, 0.42],
    stretched: [0, 0.72, 0.5],
    squeezed: [-0.1, 0.56, 0.38],
  },
  4: {
    base: [-0.06, 0.61, 0.3, 0.15],
    stretched: [0, 0.71, 0.4, 0.25],
    squeezed: [-0.12, 0.59, 0.28, 0.13],
  },
};

function layoutFor(count: number) {
  return (
    LAYOUTS[count] ?? {
      base: Array.from({ length: count }, (_, i) =>
        i === 0 ? -0.04 : Math.max(0.12, 0.7 / i),
      ),
      stretched: Array.from({ length: count }, (_, i) =>
        i === 0 ? 0 : Math.max(0.18, 0.8 / i),
      ),
      squeezed: Array.from({ length: count }, (_, i) =>
        i === 0 ? -0.1 : Math.max(0.1, 0.62 / i),
      ),
    }
  );
}

type Card = { key: number; slide: number };

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  return reduced;
}

export type SqueezeCarouselProps = {
  slides: SqueezeSlide[];
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  height?: Size;
  slatWidth?: Size;
  slatGap?: Size;
  gap?: Size;
  radius?: Size;
  duration?: number;
  hoverGrow?: boolean;
  autoplay?: boolean;
  interval?: number;
  controls?: boolean;
  accent?: string;
  accentForeground?: string;
  label?: string;
  panelClassName?: string;
} & Omit<ComponentProps<"div">, "onSelect">;

export function SqueezeCarousel({
  slides,
  defaultIndex = 0,
  onIndexChange,
  height = "clamp(200px, 36cqi, 380px)",
  slatWidth: _slatWidth = 8,
  slatGap: _slatGap = 8,
  gap = 16,
  radius = 16,
  duration = 1000,
  hoverGrow = true,
  autoplay = false,
  interval = 6000,
  controls = true,
  accent = "var(--accent)",
  accentForeground = "var(--on-accent)",
  label = "Nossa operação em imagens",
  panelClassName,
  className,
  style,
  ...props
}: SqueezeCarouselProps) {
  const count = slides.length;
  const layout = layoutFor(count);

  const reduced = useReducedMotion();
  const ms = reduced ? 0 : duration;

  const ids = useId();
  const strip = useRef<HTMLDivElement>(null);

  const [cards, setCards] = useState<Card[]>(() =>
    slides.map((_, i) => ({
      key: i,
      slide: (defaultIndex + i) % Math.max(count, 1),
    })),
  );
  const [hover, setHover] = useState(-1);

  const open = cards[0]?.slide ?? defaultIndex;

  const step = useCallback(
    (by: number) => {
      if (count < 2 || by === 0) return;
      const n = ((by % count) + count) % count;
      if (n === 0) return;
      setCards((stripCards) => [...stripCards.slice(n), ...stripCards.slice(0, n)]);
      setHover(-1);
    },
    [count],
  );

  useEffect(() => {
    onIndexChange?.(open);
  }, [open, onIndexChange]);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused || reduced || count < 2) return;
    const timer = window.setTimeout(() => step(1), interval);
    return () => clearTimeout(timer);
  }, [autoplay, paused, reduced, count, open, interval, step]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number | undefined> = {
      ArrowRight: 1,
      ArrowLeft: -1,
    };
    const by = moves[event.key];
    if (by === undefined) return;
    event.preventDefault();
    step(by);
  };

  if (!count) return null;

  const shares =
    hoverGrow && hover >= 0 && hover < count && !reduced ? null : layout.base;

  const shareOf = (col: number) => {
    if (shares) return layout.base[col] ?? 0;
    return hover === col
      ? (layout.stretched[col] ?? 0)
      : (layout.squeezed[col] ?? 0);
  };

  const widthOf = (col: number) => {
    if (col <= 0) return `calc(var(--sq-hero) + var(--sq-room) * ${shareOf(0)})`;
    return `calc(var(--sq-room) * ${shareOf(col)})`;
  };

  const vars = {
    "--sq-h": size(height),
    "--sq-gap": size(gap),
    "--sq-radius": size(radius),
    "--sq-ms": `${ms}ms`,
    "--sq-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
    "--sq-fill": accent,
    "--sq-on-fill": accentForeground,
    "--sq-hero": "calc(var(--sq-h) * 16 / 9)",
    "--sq-room": `calc(100cqi - var(--sq-hero) - ${Math.max(count - 1, 0)} * var(--sq-gap))`,
  } as CSSProperties;

  return (
    <div
      className={cn("flex w-full flex-col", className)}
      style={{
        containerType: "inline-size",
        ...vars,
        ...style,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHover(-1);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      {...props}
    >
      {controls && count > 1 && (
        <div className="mb-4 flex justify-end gap-2">
          <Arrow back label="Anterior" onClick={() => step(-1)} />
          <Arrow label="Próximo" onClick={() => step(1)} />
        </div>
      )}

      <div className="w-full overflow-hidden" style={{ height: "var(--sq-h)" }}>
        <div
          ref={strip}
          role="tablist"
          aria-label={label}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="flex h-full w-full"
        >
          {cards.map((card, col) => {
            const slide = slides[card.slide];
            const front = col === 0;

            return (
              <button
                key={card.slide}
                type="button"
                role="tab"
                id={`${ids}-tab-${card.slide}`}
                aria-selected={front}
                aria-controls={`${ids}-panel`}
                aria-label={slide.title}
                tabIndex={front ? 0 : -1}
                onMouseMove={() => hoverGrow && setHover(col)}
                onClick={() => col > 0 && step(col)}
                className={cn(
                  "relative isolate h-full shrink-0 cursor-pointer overflow-hidden bg-paper-deep p-0",
                  "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  "focus-visible:ring-[var(--sq-fill)] focus-visible:ring-offset-paper",
                  panelClassName,
                )}
                style={{
                  width: widthOf(col),
                  marginLeft: col === 0 ? 0 : "var(--sq-gap)",
                  borderRadius: `min(var(--sq-radius), calc(${widthOf(col)} / 2))`,
                  transitionProperty: "width, margin-left",
                  transitionDuration: "var(--sq-ms)",
                  transitionTimingFunction: "var(--sq-ease)",
                }}
              >
                <Picture slide={slide} />

                {slide.overlay && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-4 pt-16 @lg:p-6 @lg:pt-20"
                    style={{
                      opacity: front ? 1 : 0,
                      transition: `opacity var(--sq-ms) var(--sq-ease)`,
                      backgroundImage:
                        "linear-gradient(to top, rgb(20 17 14 / 0.55), transparent)",
                    }}
                  >
                    {slide.overlay}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${ids}-panel`}
        role="tabpanel"
        aria-live="polite"
        className="mt-6 grid @xl:mt-7"
      >
        {slides.map((slide, i) => {
          const shown = i === open;

          return (
            <div
              key={slide.id ?? i}
              aria-hidden={!shown}
              className={cn(
                "col-start-1 row-start-1 flex flex-col gap-4",
                "@xl:flex-row @xl:items-start @xl:justify-between @xl:gap-10",
              )}
              style={{
                opacity: shown ? 1 : 0,
                visibility: shown ? "visible" : "hidden",
                pointerEvents: shown ? "auto" : "none",
                transition: `opacity var(--sq-ms) var(--sq-ease), visibility var(--sq-ms)`,
              }}
            >
              <p className="max-w-[46rem] text-[15px] leading-[1.6] text-balance @lg:text-[17px]">
                <span className="font-medium text-ink">{slide.title}</span>{" "}
                {slide.description && (
                  <span className="text-muted">{slide.description}</span>
                )}
              </p>

              {slide.action && <Action slide={slide} shown={shown} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Picture({ slide }: { slide: SqueezeSlide }) {
  const box = {
    width: "var(--sq-hero)",
    minWidth: "100%",
  } as const;

  if (slide.image) {
    return (
      // Squeeze crop needs a fixed 16:9 block; next/image fill would rescale per panel width.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slide.image}
        alt={slide.imageAlt ?? ""}
        draggable={false}
        className="absolute inset-y-0 left-1/2 h-full max-w-none -translate-x-1/2 object-cover"
        style={box}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-1/2 -translate-x-1/2"
      style={{ background: slide.background, ...box }}
    />
  );
}

function Arrow({
  back = false,
  label,
  onClick,
}: {
  back?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "grid size-9 cursor-pointer place-items-center rounded-md",
        "bg-[var(--sq-fill)] text-[var(--sq-on-fill)]",
        "transition-opacity outline-none hover:opacity-85",
        "focus-visible:ring-2 focus-visible:ring-[var(--sq-fill)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
      )}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path
          d={
            back
              ? "M9.6 2.6 5.1 7.1h9.1v1.8H5.1l4.5 4.5-1.2 1.2-6-6L1.8 8l.6-.6 6-6 1.2 1.2Z"
              : "M6.4 2.6l4.5 4.5H1.8v1.8h9.1l-4.5 4.5 1.2 1.2 6-6 .6-.6-.6-.6-6-6-1.2 1.2Z"
          }
        />
      </svg>
    </button>
  );
}

function Action({ slide, shown }: { slide: SqueezeSlide; shown: boolean }) {
  const inside = (
    <>
      {slide.action}
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/sq-action:translate-x-0.5"
      >
        <path
          d="M1.2 1 4.7 4.5 1.2 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  const dress = cn(
    "group/sq-action inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-md",
    "bg-[var(--sq-fill)] px-4 py-2.5 text-sm font-medium text-[var(--sq-on-fill)]",
    "transition-opacity outline-none hover:opacity-85",
    "focus-visible:ring-2 focus-visible:ring-[var(--sq-fill)]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
  );

  if (slide.href) {
    return (
      <a
        href={slide.href}
        target={slide.target}
        rel={slide.target === "_blank" ? "noreferrer" : undefined}
        tabIndex={shown ? 0 : -1}
        onClick={slide.onAction}
        className={dress}
      >
        {inside}
      </a>
    );
  }

  return (
    <button type="button" tabIndex={shown ? 0 : -1} onClick={slide.onAction} className={dress}>
      {inside}
    </button>
  );
}

export default SqueezeCarousel;
