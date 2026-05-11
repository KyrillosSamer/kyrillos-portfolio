"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(t);
  localStorage.setItem("theme", t);
};

export const useTheme = () => {
  const [theme,   setTheme]   = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored    = localStorage.getItem("theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
    const initial   = stored ?? preferred;

    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return { theme, toggle, mounted };
};