"use client";

import { type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { offer, site } from "@/data/content";

const inputClass =
  "w-full min-h-12 rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35 outline-none transition-colors duration-200 focus:border-hero-gold focus:ring-2 focus:ring-hero-gold/30";

const labelClass =
  "mb-1.5 block text-left text-[0.68rem] font-semibold tracking-[0.16em] text-gold-line uppercase";

function whatsappUrlFromForm(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("nome") ?? "").trim();
  const bakery = String(data.get("padaria") ?? "").trim();
  const city = String(data.get("cidade") ?? "").trim();
  const phone = String(data.get("whatsapp") ?? "").trim();

  const message = [
    offer.form.messageIntro,
    "",
    `Nome: ${name}`,
    `Padaria: ${bakery}`,
    `Cidade: ${city}`,
    `WhatsApp: ${phone}`,
  ].join("\n");

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppLeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = whatsappUrlFromForm(event.currentTarget);
  }

  const { name, bakery, city, phone } = offer.form.fields;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-9 w-full text-left"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{name.label}</span>
          <input
            required
            name={name.name}
            type="text"
            autoComplete="name"
            placeholder={name.placeholder}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{phone.label}</span>
          <input
            required
            name={phone.name}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={phone.placeholder}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{bakery.label}</span>
          <input
            required
            name={bakery.name}
            type="text"
            placeholder={bakery.placeholder}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{city.label}</span>
          <input
            required
            name={city.name}
            type="text"
            autoComplete="address-level2"
            placeholder={city.placeholder}
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-on-accent shadow-[0_10px_28px_rgba(161,98,7,0.38)] transition-all duration-200 ease-out hover:bg-accent-hover hover:-translate-y-px"
      >
        {offer.form.submit}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}
