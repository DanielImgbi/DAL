"use client";
import { FC } from "react";
import { PROJECTS } from "../../../constants/projects";
import Image from "next/image";
import { TextReveal } from "../../common/text-reveal";
import { DiagonalReveal } from "../../common/image-reveal";

const Projects = () => {
  return (
    <section className="bg-inverse-1  perspective-section relative z-20  ">
      <main className="transform-container px-4">
        <header className=" py-[3rem] space-y-[6rem] w-full lg:py-[6rem] ">
          <div className=" flex flex-col items-center">
            <div className="font-anton-sc leading-[100%]  text-red-950 text-4xl font-bold mb-2 ">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.08}
              >
                Projects
              </TextReveal>
            </div>
            <p className="flex flex-col items-center text-red-950/80 text-center leading-[110%] text-[2rem] font-anton-sc  mb-4 lg:text-[3rem]">
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

        <div className="flex flex-col flex-wrap gap-3 m-auto items-center  w-full lg:w-[80%] lg:flex-row lg:justify-between ">
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
    <article className="w-full shadow-xl shadow-black/3 rounded-2xl lg:w-[27rem] ">
      <DiagonalReveal
        className=""
        duration={2}
        delay={index * 0.1}
      >
        <Image
          src={image}
          alt={name}
          className="object-contain w-full h-auto rounded-t-2xl"
        />
      </DiagonalReveal>

      <div className="p-8 flex items-center justify-between  text-black">
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
        <p className="font-gambetta text-2xl text-black/60 leading-[100%]">
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
