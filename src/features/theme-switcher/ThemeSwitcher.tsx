"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { ThemeSwitcher } from "@/features/theme-switcher/ThemeSwitcher";

const navLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur border-b border-gray-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="text-white font-bold text-lg tracking-tight"
        >
          KS<span className="text-purple-400">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  pathname === href
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Hire Me */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium 
                       transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2"
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur border-t border-gray-800 px-4 py-4 space-y-1">
          
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                pathname === href
                  ? "text-white bg-gray-800"
                  : "text-gray-400 hover:text-white hover:bg-gray-900"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Theme Switcher (mobile) */}
          <div className="px-4 py-2">
            <ThemeSwitcher />
          </div>

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