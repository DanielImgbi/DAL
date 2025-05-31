/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import {
  Palette,
  Monitor,
  Smartphone,
  Video,
  Globe,
  Box,
  Home,
  Layers,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Palette className="w-6 h-6 text-slate-900" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-yellow-400">
            Destiny&apos;s Art Lab
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#about"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white/80 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#works"
            className="text-white/80 hover:text-white transition-colors"
          >
            Works
          </a>
          <a
            href="#testimonials"
            className="text-white/80 hover:text-white transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white transition-colors"
          >
            Contact
          </a>
          <button
            className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(45deg, #FFD700, #FFA500)",
              color: "#231f20",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-30 p-6">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#works"
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Works
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Contact
            </a>
            <button className="mt-4 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
