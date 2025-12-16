"use client";

import { useEffect } from "react";

export default function ProjectPage() {
  // Local reveal animation
  useEffect(() => {
    const items = document.querySelectorAll(".project-reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[1500px] px-6 pt-32 pb-32 text-white">

      {/* TITLE */}
      <h1 className="text-[36px] font-light tracking-tight mb-3 project-reveal">
        Studio Launch Spot – GCGT
      </h1>

      {/* SUBTITLE */}
      <p className="text-[15px] text-neutral-400 mb-16 project-reveal">
        Direction · Edit · Color
      </p>

      {/* COVER IMAGE */}
      <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition project-reveal">
        <img
          src="/images/gcgt-launch-cover.png"
          alt="GCGT Launch Spot cover"
          className="w-full object-cover"
        />
      </div>

    </main>
  );
}
