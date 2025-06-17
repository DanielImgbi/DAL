"use client";
import { useRef, FC, useContext, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SERVICES } from "../../../constants/projects";
import Image from "next/image";
import { TextReveal } from "../../common/text-reveal";
import { DiagonalReveal } from "../../common/image-reveal";
import { LoadingContext } from "../../layout";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
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
        <header className="w-[90%] mx-auto py-6 space-y-[6rem]">
          <div className=" flex flex-col items-center">
            <h2 className="font-anton-sc leading-[100%]  text-[#c2a546ad] text-4xl lg:text-9xl font-bold mb-2 ">
              Services
            </h2>
            <p className="flex flex-col items-center text-center leading-[110%] text-[2rem] font-anton-sc  mb-4 lg:text-[3rem]">
              {[
                "Discover our tailored services designed to elevate your brand, enhance user experience.",
              ].map((lines, i) => (
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
              ))}
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row flex-wrap gap-3 px-4">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={i}
              {...s}
              position={i === 1 ? "left" : "right"}
              index={i}
            />
          ))}
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={i}
              {...s}
              position={i === 1 ? "left" : "right"}
              index={i}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;

const ServiceCard: FC<
  IServices & {
    position: string;
    index: number;
  }
> = ({ description, details, image, title, index }) => {
  return (
    <article
      className={`flex flex-col mb-1 w-full shadow-xl shadow-black/3 rounded-xl lg:w-[27rem]`}
    >
      <div className="w-full">
        <DiagonalReveal
          className=""
          duration={2}
          delay={index * 0.1}
        >
          <Image
            src={image}
            alt={title[0] + title[1]}
            className="object-cover rounded-t-xl"
          />
        </DiagonalReveal>
      </div>

      <div className="flex flex-col justify-between p-2 ">
        <div className="space-y-4 ">
          <h2 className="font-anton-sc flex flex-row  leading-[100%] text-2xl font-bold  lg:flex-col">
            {title}
          </h2>
          <p className="font-semibold text-[1rem] leading-[140%]">{description}</p>
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl text-[#A58E41FF] font-gambetta">
            <TextReveal
              key={`details-title-${details.title}`}
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.6}
            >
              {`(${details.title})`}
            </TextReveal>
          </h4>
        </div>
      </div>
    </article>
  );
};