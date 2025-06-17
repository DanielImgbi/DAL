"use client";


// import { hero_banner } from "@/constants/images";
import hero_banner from '@/images/project_goldline.png'
import Image from "next/image";
import { useContext, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "../../common/text-reveal";
import { DiagonalReveal, } from "../../common/image-reveal";
import { LoadingContext } from "../../layout";
import Navigation from "../../common/navigation";
import BackgroundImage from '../../common/backgroundImage';
import { FlipLink } from '../../common/flip-link';
// import BackgroundImage from "@/components/common/backgroundImage";

// import { Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const { isLoading, animationComplete } = useContext(LoadingContext);

  useGSAP(
    () => {
      if (!isLoading && animationComplete) {
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
      }
    },
    {
      dependencies: [isLoading, animationComplete],
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className=" flex flex-row relative bg-black h-screen items-center justify-center"
    >
      <Navigation isHomePage={true} />
      <BackgroundImage />


      <div
        ref={leftSideRef}
        className="h-screen w-screen absolute top-0 opacity-0"
      >
        <div className="relative h-full ">
          {/* <Palette className="object-cover w-full h-full" /> */}
          <Image
            ref={imageRef}
            src={hero_banner}
            alt="hero banner"
            className="object-cover "
            priority
            quality={50}
            fill
            style={{ objectPosition: "15% center" }}
          />
        </div>

      </div>

      <div className=" flex-1 flex w-screen bg-amber-400k  lg:w-1/2  ">
        <div
          ref={contentRef}
          className="transform-container bg-red-500k lg:w-1/2"
        >
          <div className="px-[3rem] pt-2 lg:pt-[3rem] pb-12 h-screen lg:h-full flex flex-col justify-center items-center text-white ">
            <h1 className="font-anton-sc text-5xl lg:text-[7rem] text-[#c2a546ad]  font-bold flex flex-col leading-[100%]">
              Destiny&apos;s Art Lab
            </h1>

            <p className="text-2xl lg:text-3xl mt-3 -tracking-[0.02345rem] leading-[130%]">
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
                websites that drive growth and
              </TextReveal>
              <TextReveal
                splitType="lines"
                direction="up"
                duration={0.7}
                delay={1.8}
                stagger={0.08}
              >
                success.
              </TextReveal>
            </p>


            <div className=' w-full mt-3'>
              <button className='bg-[#c2a546ad] text-white font-semibold  text-xl px-10 py-3 rounded-xl '>
                <FlipLink
                  href={'/'}
                >
                  Contact
                </FlipLink>
              </button>
            </div>
          </div>

          {/* <div className="px-[1.37rem] pt-[4.5rem] pb-[3rem] space-y-[8rem] ">
            <div className=" flex flex-col items-center lg:items-baseline">
              <span className="font-anton-sc leading-[100%] text-4xl font-bold mb-2">
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                >
                  About Us
                </TextReveal>
              </span>

              <h2 className="flex flex-col items-center  leading-[110%] text-[2rem] font-anton-sc  mb-4 lg:text-[3rem] lg:text-start lg:items-baseline">
                Creative Brands, Powerful Websites
              </h2>

              <p className="flex flex-col gap-8  text-center text-inverse-muted space-x-2.5 text-al font-normal leading-[170%] lg:text-start">
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

            <div>
              <span className="font-gambetta leading-[100%] text-2xl mb-6">
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                >
                  (Companies we worked with)
                </TextReveal>
              </span>

              <div className="grid grid-cols-3 gap-8">
                {COMPANIES.map((company, index) => (
                  <div key={index}>
                    <SmallerImageBottomUpReveal
                      delay={index * 0.1}
                      duration={1}
                    >
                      <Image
                        src={company}
                        alt="company"
                        className="object-contain"
                      />
                    </SmallerImageBottomUpReveal>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
