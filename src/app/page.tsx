import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BiographySection } from "@/components/sections/BiographySection";
import { ContentAwareCTA } from "@/components/ui/ContentAwareCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BiographySection variant="about" focusArea="client outcomes" />
      <TestimonialSection />
      <WorkSection />
      <ContentAwareCTA 
        context="homepage" 
        title="Ready to Discuss Your Project?"
        description="Let's transform your business requirements into elegant solutions that solve real problems."
      />
      <ContactSection />
    </>
  );
}
