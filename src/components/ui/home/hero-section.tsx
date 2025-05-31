"use client";

import logo from "@/assets/Primary logo 1@11x.png";

import Navigation from "@/components/common/navigation";
import Image from "next/image";
import { useContext, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DiagonalReveal } from "@/components/common/image-reveal";
import { TextReveal } from "@/components/common/text-reveal";
import { LoadingContext } from "@/components/layout";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const imageRef = useRef(null);
  const { isLoading, animationComplete } = useContext(LoadingContext);

  useGSAP(
    () => {
      // if (!isLoading && animationComplete) {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();

      setTimeout(() => {
        gsap.to(imageRef.current, {
          objectPosition: "85% center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "bottom bottom-=300",
          end: "bottom top-=300",
          pin: true,
          pinSpacing: false,
          id: "hero-pin",
        });

        gsap.to(containerRef.current, {
          rotateX: "12deg",
          scale: 0.92,
          opacity: 0.8,
          transformOrigin: "center bottom",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom-=300",
            end: "bottom bottom-=500",
            scrub: true,
          },
        });
      }, 100);
      // }
    },
    {
      dependencies: [isLoading, animationComplete],
      scope: containerRef,
    }
  );

  return (
    <section
      // ref={containerRef}
      className="h-screen w-screen max-w-[1440px] mx-auto flex flex-col  bg-black"
    >
      <Navigation isHomePage={true} />

      <div className="w-screen flexm flex-col hidden lg:flex-row ">
        <div className="px-[1.37rem] pt-[4.37rem] pb-12  w-screen lg:w-1/2 lg:px-[4.5rem] ">
          <span className="font-gambetta leading-[100%]  text-4xl font-bold mb-6">
            <TextReveal
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
            >
              Destiny&apos;s Artlab
            </TextReveal>
          </span>

          <p className="text-2xl mt-7 -tracking-[0.02345rem] leading-[130%] lg:text-4xl lg:mt-32">
            <TextReveal
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={1.4}
            >
              Crafting impactful brands and
            </TextReveal>
            <TextReveal
              splitType="lines"
              direction="up"
              duration={0.7}
              delay={1.6}
              stagger={0.08}
            >
              websites that drive growth and success.
            </TextReveal>
          </p>
        </div>

        <div
          // ref={leftSideRef}
          className="h-full w-screen lg:w-1/2  hidden"
        >
          <DiagonalReveal
            className="h-full"
            delay={1.5}
            duration={2}
          >
            <div className="relative h-full flex justify-center items-center">
              <Image
                // ref={imageRef}
                src={logo}
                alt="hero logo"
                className="object-cover object-center "
                priority
                style={{ objectPosition: "15% center" }}
              />
            </div>
          </DiagonalReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
