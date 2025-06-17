"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FOOTER_LINKS } from "../../../constants/footer";
import Link from "next/link";
import { TextReveal } from "../../common/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className="bg-[#140505]  perspective-section relative z-20">
      <div className="w-[90%] max-w-[1440px] mx-auto pt-[4.5rem] pb-12 flex flex-col justify-between h-full">
        <h2 className="font-anton-sc text-4xl uppercase flex flex-col leading-[100%] lg:text-[5rem] mb-7">
          <TextReveal
            splitType="none"
            direction="up"
            duration={0.7}
            stagger={0.08}
            delay={1}
          >
            Destiny&apos;s Artlab
          </TextReveal>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {FOOTER_LINKS.map((links, index) => (
            <div
              key={index}
              className="space-y-6 flex flex-col mb-5"
            >
              <h4 className=" text-2xl text-white font-bold">
                <TextReveal
                  splitType="words"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                  delay={index * 0.05}
                >
                  {`${links.category}`}
                </TextReveal>
              </h4>
              <div className="flex flex-col gap-4">
                {links?.links?.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white/60 text-sm leading-[130%] font-semibold"
                  >
                    <TextReveal
                      splitType="words"
                      direction="up"
                      duration={0.7}
                      stagger={0.08}
                      delay={index * 0.05}
                    >
                      {link.name}
                    </TextReveal>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
