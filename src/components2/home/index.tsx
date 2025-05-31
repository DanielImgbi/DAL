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
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Works Section */}
      <WorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
