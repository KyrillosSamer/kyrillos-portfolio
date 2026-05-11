"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { useTheme } from "@/shared/hooks/useTheme";

const navLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </svg>
);

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur border-b border-gray-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href={ROUTES.home} className="flex items-center">
          <img
            src="/assets/ks.png"
            alt="KS Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-lg"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gray-800"
                      : "text-gray-400 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg border border-gray-800 flex items-center 
                         justify-center text-gray-400 hover:text-white 
                         hover:border-gray-600 transition-all duration-200"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-500 hover:to-blue-500 text-white text-sm 
                       font-medium transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg border border-gray-800 flex items-center 
                         justify-center text-gray-400 hover:text-white transition-all"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur border-t border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="block mt-2 px-4 py-2.5 rounded-lg text-center text-sm text-white 
                       bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};