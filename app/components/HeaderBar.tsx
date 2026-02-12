"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderBar() {
  const getTime = () => {
    const now = new Date();
    return (
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + " CST"
    );
  };

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const updateTime = () => {
      setTime(getTime());
    };

    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-black/40 backdrop-blur-md">
      <div className="max-w-[1800px] mx-auto px-10 py-6 flex items-center gap-6 text-neutral-200">

        {/* LEFT — CTA */}
        <div className="flex items-center whitespace-nowrap gap-2">
          <span className="text-lg -mb-[2px]">↳</span>
          <Link href="/contact" className="text-sm hover:text-white transition">
            Collaborate
          </Link>
        </div>

        {/* LEFT LINE */}
        <div className="flex-1 h-px bg-white/20"></div>

        {/* CENTER — NAME LINK */}
        <Link
          href="/"
          className="px-6 bg-black text-xs tracking-[0.25em] whitespace-nowrap hover:text-white transition"
        >
          BRADY HUDSON
        </Link>

        {/* RIGHT LINE */}
        <div className="flex-1 h-px bg-white/20"></div>

        {/* RIGHT — NAV + CLOCK */}
        <div className="flex items-center gap-8 whitespace-nowrap">

          <Link href="/#portfolio" className="hover:text-white transition text-sm">
            Portfolio
          </Link>

          <Link href="/#about" className="hover:text-white transition text-sm">
            About
          </Link>

          <span className="text-neutral-400 text-sm w-[70px] text-right inline-block">
            {time}
          </span>

        </div>
      </div>
    </header>
  );
}
