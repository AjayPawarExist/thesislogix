import AboutSection from "@/components/about-section";
import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process-section";
import ResearchServices from "@/components/research-services";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <ResearchServices />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
      <ContactSection />
    </div>
  )
}
