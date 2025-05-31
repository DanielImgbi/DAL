import Footer from "./footer";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Services from "./services";
import Testimonials from "./testimonials";
import About from "./about";

const HomeInject = () => {
  return (
    <main className=" w-screen mx-auto max-w-[1440px] relative perspective-wrapper">
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomeInject;
