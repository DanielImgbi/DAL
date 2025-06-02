"use client";

import { useState } from "react";
import Logo from "@/assets/Primary logo 1@11x.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    {
      link: "About",
      href: "#about",
    },
    {
      link: "Services",
      href: "#services",
    },
    {
      link: "Works",
      href: "#works",
    },
    {
      link: "Testimonials",
      href: "#testimonials",
    },
    {
      link: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header>
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-30 h-10 rounded-lg  flex items-center justify-center">
            <Image
              src={Logo}
              alt="logo"
              className="w-full h-full text-slate-900"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {menu.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.link}
            </a>
          ))}

          <button className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-[#A58E41FF] to-[#d3a250] hover:scale-105">
            Get Started
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-30 p-6">
          <div className="flex flex-col space-y-4">
            {menu.map((item, i) => (
              <a
                href={item.href}
                key={i}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.link}
              </a>
            ))}
            <button className="mt-4 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-[#A58E41FF] to-[#d3a250] text-slate-900">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
