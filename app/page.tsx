import HeroSection from '@/components/hero/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import TechStackSection from '@/components/TechStackSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
