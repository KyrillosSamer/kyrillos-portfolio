"use client";

import Link from "next/link";
import { PERSONAL_INFO, SKILLS } from "@/shared/config/constants";
import { ROUTES } from "@/shared/config/routes";
import { useEffect, useRef } from "react";

const typewriterTitles = [
  "Front-End Developer",
  "GIS Solutions Developer",
  "ERP & SaaS Engineer",
  "Clean Architecture Advocate",
];

export const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const current = typewriterTitles[titleIndex];
      const el = typedRef.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % typewriterTitles.length;
        }
      }

      timeout = setTimeout(type, isDeleting ? 50 : 80);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-full px-4 py-1.5 mt-20 mb-6 text-sm text-gray-300 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {PERSONAL_INFO.name.split(" ").slice(0, 2).join(" ")}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            {PERSONAL_INFO.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-8 sm:h-10 mb-6 flex items-center justify-center">
          <p className="text-lg sm:text-xl text-gray-400">
            <span
              ref={typedRef}
              className="text-purple-400 font-mono font-medium"
            />
            <span className="animate-pulse text-purple-400">|</span>
          </p>
        </div>

        {/* Summary */}
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILLS.frontend.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 bg-gray-900/60 backdrop-blur"
            >
              {skill}
            </span>
          ))}

          {SKILLS.gis.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border border-blue-800 text-blue-300 bg-blue-950/40 backdrop-blur"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ROUTES.projects}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-500 hover:to-blue-500 text-white font-medium 
                       transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 
                       hover:-translate-y-0.5"
          >
            View My Work
          </Link>

          <a
            href={PERSONAL_INFO.cvUrl}
            download
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-gray-500 
                       text-gray-300 hover:text-white font-medium transition-all duration-300 
                       hover:-translate-y-0.5 backdrop-blur bg-gray-900/40"
          >
            Download CV
          </a>

          <Link
            href={ROUTES.contact}
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-gray-500 
                       text-gray-300 hover:text-white font-medium transition-all duration-300 
                       hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>Scroll down</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};