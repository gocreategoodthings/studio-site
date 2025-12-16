"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderBar() {
  const [time, setTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    setTime(
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + " CST"
    );
  };

  updateTime();
  const interval = setInterval(updateTime, 60000);
  return () => clearInterval(interval);
}, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-[1800px] mx-auto px-4 md:px-10 py-4 md:py-6 flex items-center gap-3 md:gap-6 text-neutral-200">

        {/* LEFT — CTA (hidden on mobile) */}
        <div className="hidden md:flex items-center whitespace-nowrap gap-2">
          <span className="text-lg -mb-[2px]">↳</span>
          <Link href="/contact" className="text-sm hover:text-white transition">
            Collaborate
          </Link>
        </div>

        {/* LEFT LINE (hidden on mobile) */}
        <div className="hidden md:block flex-1 h-px bg-white/20"></div>

        {/* CENTER — NAME LINK */}
        <Link
          href="/"
          className="px-3 md:px-6 bg-black text-[10px] md:text-xs tracking-[0.25em] whitespace-nowrap hover:text-white transition"
        >
          BRADY HUDSON
        </Link>

        {/* RIGHT LINE (hidden on mobile) */}
        <div className="hidden md:block flex-1 h-px bg-white/20"></div>

        {/* RIGHT — NAV + CLOCK */}
        <div className="flex items-center gap-3 md:gap-8 whitespace-nowrap text-xs md:text-sm">

          {/* SCROLL TO PORTFOLIO */}
          <Link href="/#portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          {/* SCROLL TO ABOUT */}
          <Link href="/#about" className="hover:text-white transition">
            About
          </Link>

          {/* CLOCK (hidden on mobile) */}
          <span className="hidden md:inline text-neutral-400">{time}</span>
        </div>

      </div>
    </header>
  );
}
