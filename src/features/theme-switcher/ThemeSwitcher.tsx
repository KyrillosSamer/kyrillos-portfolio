"use client";

import { useTheme } from "@/shared/hooks/useTheme";

const SunIcon = () => (
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
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
    />
  </svg>
);

const MoonIcon = () => (
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
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </svg>
);

export const ThemeSwitcher = () => {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-lg border flex items-center justify-center
                 transition-all duration-200
                 border-indigo-200   dark:border-gray-700
                 text-indigo-800     dark:text-gray-600
                 hover:text-indigo-700 dark:hover:text-white
                 hover:border-indigo-400 dark:hover:border-gray-500
                 bg-white/70         dark:bg-transparent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};