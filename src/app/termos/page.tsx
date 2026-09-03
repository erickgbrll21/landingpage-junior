import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { termsOfUse } from "@/data/legal";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: termsOfUse.description,
  alternates: {
    canonical: "/termos",
  },
  openGraph: {
    title: `${termsOfUse.title} · ${site.name}`,
    description: termsOfUse.description,
    url: `${site.url}/termos`,
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={termsOfUse.title}
      updatedAt={termsOfUse.updatedAt}
      intro={termsOfUse.intro}
      sections={termsOfUse.sections}
    />
  );
}
