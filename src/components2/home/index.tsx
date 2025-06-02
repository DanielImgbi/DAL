import Footer from "../common/footer";
import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import PartnersSection from "./partners";
import ServicesSection from "./services";
import TestimonialsSection from "./testimonials";
import WorksSection from "./works";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
