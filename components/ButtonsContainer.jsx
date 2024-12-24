"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // Changed from MoonIcon, SunIcon

export default function ButtonsContainer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="buttons-container">
      <button
        onClick={toggleTheme}
        className="theme-button"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}
