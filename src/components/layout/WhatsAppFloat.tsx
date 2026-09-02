import { site } from "@/data/content";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:right-6 sm:bottom-6"
      aria-label="Conversar no WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.32 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2Zm5.79 14.07c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.13-1.81-.11-.42-.15-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36h.54c.17 0 .41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.5-.14.17-.3.38-.43.51-.14.15-.29.31-.12.6.16.29.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.15.45.12.61-.07.16-.2.7-.81.88-1.09.19-.27.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.32.07.12.07.68-.17 1.36Z" />
      </svg>
    </a>
  );
}
