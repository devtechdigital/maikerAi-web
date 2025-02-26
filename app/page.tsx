import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import BusinessStagesSection from "@/components/homepage/marketing-cards";
import BenefitsSection from "@/components/homepage/benefits-section";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full">
        <HeroSection />
      </div>
      <BenefitsSection />
      <BusinessStagesSection />
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about Maiker.Ai and our marketplace offerings.
          </p>
        </div>
        <AccordionComponent />
      </div>
    </PageWrapper>
  );
}
