"use client";
import About from "./about";
import Footer from "./footer";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Services from "./services";
import Testimonials from "./testimonials";

const HomeInject = () => {
  return (
    <main className="max-w-[1440px] min-h-screen mx-auto relative perspective-wrapper">

      <HeroSection />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomeInject;
