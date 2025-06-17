"use client";

import { useContext, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextReveal } from "../../common/text-reveal";
import { LoadingContext } from "../../layout";
import { useGSAP } from "@gsap/react";
import image from "@/assets/Our Services DAL.png";
import { DiagonalReveal } from "../../common/image-reveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);
  const { isLoading, animationComplete } = useContext(LoadingContext);

  useGSAP(
    () => {
      // if (!isLoading && animationComplete) {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();

      setTimeout(() => {
        ScrollTrigger.create({
          trigger: contentRef.current,
          start: "bottom bottom-=300",
          end: "bottom top-=300",
          pin: true,
          pinSpacing: false,
          id: "hero-pin",
        });

        gsap.to(contentRef.current, {
          rotateX: "12deg",
          scale: 0.92,
          opacity: 0.8,
          transformOrigin: "center bottom",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: contentRef.current,
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
      scope: contentRef,
    }
  );

  return (
    <section className="w-screen  my-2 ">
      <div className="w-full flex flex-col lg:flex-row sticky ">
        <div
          // ref={contentRef}
          className="transform-container w-full lg:w-1/2"
        >
          <div className="px-[1.37rem] pb-[3rem] space-y-[8rem] lg:px-[6rem]">
            <div className=" flex flex-col items-center lg:items-baseline">
              <span className="font-anton-sc leading-[100%] text-[#A58E41FF]  text-4xl lg:text-[4.5rem] font-bold mb-2">
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                >
                  About Us
                </TextReveal>
              </span>

              <h2 className="flex flex-col items-center  leading-[110%]  font-anton-sc  mb-4 text-[2rem] lg:text-[3rem] text-center lg:text-start lg:items-baseline">
                Creative Brands, Powerful Websites
              </h2>

              <p className="flex flex-col gap-8 text-center text-inverse-muted space-x-2.5 text-al font-normal leading-[170%] lg:text-start">
                {[
                  `We are passionate about creating meaningful 
                   brands and dynamic websites that stand out in 
                   today's competitive market. Our team 
                   strategic thinking with creative design to craft 
                   custom solutions that align with your business 
                   goals. From developing a unique brand identity to 
                   designing intuitive, responsive websites, we focus on 
                  delivering experiences that engage and convert.`,
                  `With every project, we ensure that your brand's story 
                   is told in a way that resonates with your audience, 
                   builds trust, and drives growth. Let us help you 
                   transform your brand and take your digital presence 
                   to the next level. `,
                ].map((lines, i) => (
                  <span key={i}>
                    <TextReveal
                      splitType="none"
                      direction="up"
                      duration={0.7}
                      stagger={0.08}
                      delay={i * 0.05}
                    >
                      {lines}
                    </TextReveal>
                  </span>
                ))}
              </p>
            </div>

            {/* <div>
              <span className="font-gambetta leading-[100%] text-3xl font-bold mb-6">
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                >
                  Companies we worked with
                </TextReveal>
              </span>
            </div> */}
          </div>
        </div>

        <div className="relative h-full flex justify-center items-center w-full lg:w-1/2">
          <DiagonalReveal
            className=""
            duration={2}
            delay={0.1}
          >
            <Image
              src={image}
              alt={"banner"}
              className="object-contain w-10/12 h-auto m-auto"
            />
          </DiagonalReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
