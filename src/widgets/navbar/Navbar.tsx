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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
          <ThemeSwitcher />

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
          <ThemeSwitcher />

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