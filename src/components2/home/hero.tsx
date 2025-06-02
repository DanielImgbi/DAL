import { Star, ArrowRight, ChevronDown } from "lucide-react";
import HERO_IMAGE from "@/assets/DAL Services.png";
import Header from "../common/nav";
import Image from "next/image";
import Button from "../common/button";
import BackgroundImage from "../common/backgroundImage";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0 gradient_bg" />
      <div className="absolute inset-0 bg-black/10" />

      <Header />

      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-6 lg:px-12 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-white/90 text-sm font-medium">
                  Award-Winning Digital Agency
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Crafting Digital
                <span
                  className="block bg-gradient-to-r bg-clip-text text-transparent mt-2"
                  style={{ backgroundImage: "linear-gradient(45deg, #FFD700, #5aa090, #d3a250)" }}
                >
                  Masterpieces
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Where creativity meets technology. We transform your vision into stunning digital
                experiences that captivate, engage, and inspire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className=" hover:scale-105 hover:shadow-xl flex items-center justify-center bg-gradient-to-r from-[#A58E41FF] to-[#d3a250]"
                // style={{ background: COLORS.btn, color: COLORS.btnText }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button className=" border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <TextBox
                head="200+"
                body="Projects"
                className=" text-[#E0A745FF]"
              />
              <TextBox
                head="98%"
                body="Satisfaction"
                className=" text-[#5aa090]"
              />
              <TextBox
                head="5+"
                body="Years"
                className="text-[#d3a049] "
              />
            </div>
          </div>

          <div className="relative  h-full">
            <Image
              src={HERO_IMAGE}
              alt="Digital Design Showcase"
              className="w-full h-full rounded-2xl "
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
              }}
            />

            <div
              className="absolute bottom-0 left-4 w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 lg:w-24 lg:h-24 lg:bottom-6 lg:left-10"
              style={{ backgroundColor: "rgba(0, 0, 150, 0.021)" }}
            >
              <div className="text-center">
                <div
                  className="text-lg font-bold "
                  style={{ color: "#40C6DDFF" }}
                >
                  AI
                </div>
                <div className="text-white/60 text-xs">Powered</div>
              </div>
            </div>

            <div
              className="absolute top-11 right-1 w-20 h-20  rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 lg:w-24 lg:h-24 lg:right-6"
              style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
            >
              <div className="text-center">
                <div
                  className="text-lg font-bold "
                  style={{ color: "#d3a250" }}
                >
                  AI
                </div>
                <div className="text-white/60 text-xs">Enhanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Discover More</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      <BackgroundImage />
    </section>
  );
}

const TextBox = ({ head, body, className }: { head: string; body: string; className?: string }) => {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold  ${className}`}>{head}</div>
      <div className="text-white/60 text-sm">{body}</div>
    </div>
  );
};
