"use client";

import { useState } from "react";
import Image from "next/image";

type AccordionPhoto = {
  src: string;
  alt: string;
  title: string;
};

function AccordionItem({
  item,
  isActive,
  onActivate,
}: {
  item: AccordionPhoto;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={item.title}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`relative h-[320px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out sm:h-[400px] lg:h-[450px] ${
        isActive ? "min-w-[10rem] flex-[5]" : "min-w-[3.25rem] flex-[0.55]"
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 70vw, 28vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/45" />
      <span
        className={`absolute font-sans text-sm font-semibold tracking-wide whitespace-nowrap text-white transition-all duration-300 ease-in-out sm:text-base ${
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left"
        }`}
      >
        {item.title}
      </span>
    </button>
  );
}

export function ImageAccordion({ items }: { items: readonly AccordionPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex w-full flex-row items-stretch justify-center gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.src}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
