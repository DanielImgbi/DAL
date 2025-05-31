import { Star, ArrowRight } from "lucide-react";
import Dave from "@/assets/DAL Services.png";
import Header from "../common/nav";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 gradient_bg"
        style={{ background: "linear-gradient(135deg, #231f20 0%,#482d18 40%,#5aa090 100%)" }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <Header />

      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-6 lg:px-12">
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
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                style={{ background: "linear-gradient(45deg, #FFD700, #FFA500)", color: "#231f20" }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                View Portfolio
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">200+</div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#5aa090" }}
                >
                  98%
                </div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#d3a250" }}
                >
                  5+
                </div>
                <div className="text-white/60 text-sm">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={Dave}
              alt="Digital Design Showcase"
              className="w-full h-auto rounded-2xl "
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
              }}
            />

            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
              style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">AI</div>
                <div className="text-white/60 text-xs">Enhanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Discover More</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}
