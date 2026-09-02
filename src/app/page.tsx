import { Benefits } from "@/components/sections/Benefits";
import { Decision } from "@/components/sections/Decision";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Mentor } from "@/components/sections/Mentor";
import { Offer } from "@/components/sections/Offer";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Mentor />
      <Decision />
      <Results />
      <Benefits />
      <Testimonials />
      <Faq />
      <Offer />
    </main>
  );
}
