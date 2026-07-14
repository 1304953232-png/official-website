import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui-card";

export const metadata: Metadata = {
  title: "Contact | YAN VENTURES",
  description: "联系 YAN VENTURES，提交 AI 创业项目、科研成果转化项目或合作需求。"
};

const partnershipTypes = [
  "Founder / Startup",
  "Research Team",
  "Industry Partner",
  "Investment Partner",
  "University / Institution"
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact" subtitle="Build the next AI company with YAN VENTURES." />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">Partnership Types</p>
            <div className="grid gap-3">
              {partnershipTypes.map((item) => (
                <Card key={item} className="p-5">
                  <div className="text-lg font-medium">{item}</div>
                </Card>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
