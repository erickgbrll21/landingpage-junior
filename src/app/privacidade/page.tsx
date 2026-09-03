import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacyPolicy } from "@/data/legal";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: `${privacyPolicy.title} · ${site.name}`,
    description: privacyPolicy.description,
    url: `${site.url}/privacidade`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title={privacyPolicy.title}
      updatedAt={privacyPolicy.updatedAt}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
    />
  );
}
