// components/Navbar.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Match this to your hero section's id
    const heroSection = document.getElementById("home");
    if (!heroSection) return;      // <-- only bail if it's *missing* 

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }
    );
    obs.observe(heroSection);
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-black bg-opacity-90 backdrop-blur
      `}
    >
      <div className="container mx-auto px-4 flex justify-end items-center h-12 space-x-8">
        <Link href="#about"  className="text-white hover:text-gray-300">About</Link>
        <Link href="#projects" className="text-white hover:text-gray-300">Projects</Link>
        <Link href="#contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}
