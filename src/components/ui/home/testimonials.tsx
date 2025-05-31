"use client";
import { useRef, useEffect, useContext, FC, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "@/constants/testimonials";
import { TextReveal } from "@/components/common/text-reveal";
import { motion, MotionValue, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { LoadingContext } from "@/components/layout";

interface FallingCardProps extends ITestimonials {
  index: number;
  background: boolean;
  scrollYProgress: MotionValue<number>;
}

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
      className="bg-background  perspective-section relative z-20"
    >
      <main
        ref={contentRef}
        className="transform-container"
      >
        <header className="w-[90%] py-[6rem] space-y-[6rem] m-auto">
          <div className="flex flex-col items-center ">
            <h2 className="font-anton-sc leading-[100%]  text-red-950 text-4xl font-bold mb-2">
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

            <p className="flex flex-col items-center text-red-950/80 text-center leading-[110%] text-[2rem] font-anton-sc  mb-4 lg:text-[3rem]">
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

        <div className="grid grid-cols-1 gap-10 py-3 lg:grid-cols-3">
          {/* {TESTIMONIALS.map((t, i) => (
            <FallingCard
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
              {...t}
              background={i % 2 !== 0}
            />
          ))} */}
        </div>
      </main>
    </section>
  );
};

export default Testimonials;

// export const FallingCard: FC<FallingCardProps> = ({
//   avatar,
//   background,
//   company,
//   extra_comment,
//   name,
//   testimonial,
//   index,
//   scrollYProgress,
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const start = index * 0.1;
//   const end = start + 0.2;

//   const y = useTransform(scrollYProgress, [start, end], [100, 0]);
//   const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;

//     const rect = cardRef.current.getBoundingClientRect();

//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;

//     setMousePosition({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 0, y: 0 });
//   };

//   const glareX = useMotionTemplate`${mousePosition.x * 100 + 50}%`;
//   const glareY = useMotionTemplate`${mousePosition.y * 100 + 50}%`;
//   const glareOpacity = useMotionTemplate`${
//     Math.abs(mousePosition.x) + Math.abs(mousePosition.y) + 0.05
//   }`;

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ y, opacity }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="perspective-1000 relative bg-amber-300"
//     >
//       <motion.article
//         style={{
//           rotateX: useMotionTemplate`${-mousePosition.y * 10}deg`,
//           rotateY: useMotionTemplate`${mousePosition.x * 10}deg`,
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//         className={`flex flex-col p-[3.75rem] will-change-transform relative
//         ${background ? "bg-inverse-2" : "bg-inverse-1"}
//         overflow-hidden `}
//       >
//         {/* <motion.div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`,
//             opacity: glareOpacity,
//           }}
//         /> */}

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="48"
//           height="30"
//           viewBox="0 0 48 30"
//           fill="none"
//           className="mb-[4.5rem] relative z-10"
//         >
//           <path
//             d="M0 30V13.764L5.73034 0H17.5843L13.8764 13.2584H21.0112V30H0ZM26.3483 30V13.764L32.0787 0H43.9326L40.2247 13.2584H47.3596V30H26.3483Z"
//             fill="white"
//           />
//         </svg>

//         <div className="space-y-4 mb-9 relative z-10">
//           <h3 className="text-3xl font-semibold leading-[140%] tracking-[-0.0625rem]">
//             {testimonial}
//           </h3>
//           <p className="leading-[180%] text-[.9rem] text-black">{extra_comment}</p>
//         </div>

//         <div className="flex items-center gap-4 relative z-10">
//           <Image
//             src={avatar}
//             alt={name}
//             className="object-contain w-12 h-12"
//             quality={100}
//           />
//           <div>
//             <h4 className="text-xl leading-[130%] font-semibold">{name}</h4>
//             <p className="font-gambetta text-white/60">({company})</p>
//           </div>
//         </div>
//       </motion.article>
//     </motion.div>
//   );
// };
