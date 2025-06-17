"use client";
import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "../../../constants/testimonials";
import { TextReveal } from "../../common/text-reveal";
import { FallingCard } from "./falling-card";
import { useScroll } from "framer-motion";
import { LoadingContext } from "../../layout";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const testimonialRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: testimonialRef,
    offset: ["start end", "end start"],
  });

  const { isLoading, animationComplete } = useContext(LoadingContext);

  useEffect(() => {
    if (!isLoading && animationComplete) {
      initializeGSAP();
    }
  }, [isLoading, animationComplete]);

  const initializeGSAP = () => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();

      setTimeout(() => {
        gsap.to(contentRef.current, {
          rotateX: "0deg",
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "bottom bottom-=300",
          end: "bottom top-=300",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(sectionRef.current, {
          rotateX: "12deg",
          scale: 0.92,
          opacity: 0.8,
          transformOrigin: "center bottom",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom-=300",
            end: "bottom bottom-=500",
            scrub: true,
          },
        });
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="bg-background min-h-screen perspective-section relative z-20"
    >
      <main
        ref={contentRef}
        className="transform-container"
      >
        <header className="w-[90%] py-[3rem] space-y-[1rem] m-auto">
          <div className="flex flex-col items-center ">
            <h2 className="font-anton-sc leading-[100%]   text-4xl lg:text-9xl font-bold mb-2 text-[#A58E41FF]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.08}
                delay={0.2}
              >
                What our clients say
              </TextReveal>
            </h2>

            <p className="flex flex-col items-center  text-center leading-[110%] text-[2rem] font-anton-sc  mb-1 lg:text-[3rem]">
              {["Hear our clients about their success", "stories and experiences with us."].map(
                (lines, i) => (
                  <TextReveal
                    splitType="lines"
                    direction="up"
                    duration={0.7}
                    stagger={0.08}
                    delay={i === 0 ? 0.05 : i * 0.1}
                    key={i}
                  >
                    {lines}
                  </TextReveal>
                )
              )}
            </p>
          </div>
        </header>

        <div
          className="grid lg:grid-cols-3"
          ref={testimonialRef}
        >
          {TESTIMONIALS.map((t, i) => (
            <FallingCard
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
              {...t}
              background={i % 2 !== 0}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
