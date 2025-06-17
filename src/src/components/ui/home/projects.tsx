"use client";
import { useRef, useEffect, FC, useContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROJECTS } from "../../../constants/projects";
import Image from "next/image";
import { TextReveal } from "../../common/text-reveal";
import { DiagonalReveal } from "../../common/image-reveal";
import { LoadingContext } from "../../layout";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
      className="bg-inverse-1 min-h-screen perspective-section relative z-20"
    >
      <main
        ref={contentRef}
        className="transform-container w-[98%] flex  flex-col items-center"
      >
        <header className=" py-[3rem] space-y-[6rem] w-full lg:py-[6rem] ">
          <div className=" flex flex-col items-center">
            <div className="font-anton-sc leading-[100%]  text-4xl lg:text-9xl font-bold mb-2 text-[#A58E41FF]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.08}
              >
                Projects
              </TextReveal>
            </div>
            <p className="flex flex-col items-center text-center leading-[110%] text-[2rem] font-anton-sc  mb-4 lg:text-[3rem]">
              {[
                "Explore our recent projects showcasing creativity, innovation, and impactful design solutions.",
              ].map((lines, i) => (
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                  delay={i * 0.05}
                  key={i}
                >
                  {lines}
                </TextReveal>
              ))}
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row flex-wrap w-screen  px-2 gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                {...project}
                index={index}
              />
            );
          })}
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                {...project}
                index={index}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Projects;

const ProjectCard: FC<ProjectCardProps> = ({ image, name, year, index }) => {
  return (
    <article className=" w-full lg:w-[27rem] shadow-xl shadow-black/3 rounded-xl">
      <DiagonalReveal
        className=""
        duration={2}
        delay={index * 0.1}
      >
        <Image
          src={image}
          alt={name}
          className="object-contain w-full h-auto rounded-t-xl"
        />
      </DiagonalReveal>

      <div className="p-8 flex items-center justify-between">
        <h4 className="text-[1.875rem] font-semibold leading-[140%] tracking-[-0.0625rem]">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.08}
          >
            {name}
          </TextReveal>
        </h4>
        <p className="font-gambetta text-2xl text-[#A58E41FF] leading-[100%]">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.08}
            delay={0.2}
          >
            {year}
          </TextReveal>
        </p>
      </div>
    </article>
  );
};
