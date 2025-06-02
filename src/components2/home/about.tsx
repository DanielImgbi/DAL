import { Star } from "lucide-react";
import Image from "next/image";

import BackgroundImage from "../common/backgroundImage";
import BANNER from "@/assets/Our Services DAL.png";
import { DiagonalReveal } from "../common/image-reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                About <span style={{ color: "#d3a250" }}>Us</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded in 2019, Destiny&apos;s Art Lab emerged from a passion for transforming
                creative visions into digital reality.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To empower businesses and individuals by creating exceptional digital experiences
                  that bridge the gap between imagination and innovation. We believe every project
                  has a unique story waiting to be told through design.
                </p>
              </div>

              <div style={{ color: "#d3a250" }}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Values</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-[#d3a250] mr-2" /> Innovation-driven creativity
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-[#d3a250] mr-2" /> Client-centric approach
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-[#d3a250] mr-2" /> Quality without compromise
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-[#d3a250] mr-2" /> Continuous learning and growth
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <DiagonalReveal>
              <Image
                src={BANNER}
                alt="Our Creative Team"
                width={500}
                height={500}
                className="rounded shadow-xl "
              />
            </DiagonalReveal>
            {/* <div className="absolute h-screen w-screen inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div> */}
          </div>
        </div>
      </div>

      <BackgroundImage />
    </section>
  );
}
