import { About } from "@/components/about";
import { CaseStudy } from "@/components/case-study";
import { Contact } from "@/components/contact";
import { Ecosystem } from "@/components/ecosystem";
import { FocusAreas } from "@/components/focus-areas";
import { Footer } from "@/components/footer";
import { Fund } from "@/components/fund";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { VentureStudio } from "@/components/venture-studio";
import { WhatWeDo } from "@/components/what-we-do";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <VentureStudio />
        <Ecosystem />
        <FocusAreas />
        <CaseStudy />
        <Fund />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
