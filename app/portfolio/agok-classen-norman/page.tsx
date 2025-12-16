"use client";

import { useEffect } from "react";

export default function AGOKClassenNormanPage() {
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
        Classen Blvd Norman, OK Retail Center
      </h1>

      <p className="text-[15px] text-neutral-400 max-w-[600px] leading-relaxed mb-16 project-reveal">
        Aerial drone video and photography captured for a commercial retail center.
      </p>

      {/* VIDEO */}
      <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition project-reveal mb-20">
        <video
          src="/video/AGOK_ClassenNorman.mp4"
          className="w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* SECTION LABEL */}
      <h2 className="text-[13px] uppercase tracking-[0.18em] text-neutral-500 mb-6 project-reveal">
        Photos
      </h2>

      {/* IMAGE GRID */}
      <div className="grid gap-10 md:grid-cols-2">

        <div className="project-reveal">
          <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition">
            <img
              src="/images/agok-1.jpg"
              alt="AGOK photo 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="project-reveal">
          <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition">
            <img
              src="/images/agok-2.jpg"
              alt="AGOK photo 2"
              className="w-full object-cover"
            />
          </div>
        </div>

      </div>

    </main>
  );
}
