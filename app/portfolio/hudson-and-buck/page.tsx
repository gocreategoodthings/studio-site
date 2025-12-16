"use client";

import { useEffect } from "react";

export default function HudsonAndBuckPage() {
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
      { threshold: 0.18 }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const images = [
    "/images/hb-1.jpg",
    "/images/hb-2.jpg",
    "/images/hb-3.jpg",
    "/images/hb-4.jpg",
    "/images/hb-5.jpg",
    "/images/hb-6.jpg",
    "/images/hb-7.jpg",
    "/images/hb-8.jpg",
  ];

  return (
    <main className="mx-auto max-w-[1500px] px-6 pt-32 pb-32 text-white">

      {/* TITLE */}
      <h1 className="text-[36px] font-light tracking-tight mb-3 project-reveal">
        Hudson & Buck
      </h1>

      <p className="text-[15px] text-neutral-400 max-w-[600px] leading-relaxed mb-16 project-reveal">
        A small hat and apparel brand I built in college, focused on clean
        design, outdoor inspiration, and simple product storytelling.
      </p>

      {/* SECTION LABEL */}
      <h2 className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 mb-8 project-reveal">
        Gallery
      </h2>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 gap-6 space-y-6 project-reveal">
        {images.map((src, i) => (
          <div
            key={i}
            className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition break-inside-avoid"
          >
            <img
              src={src}
              alt={`Hudson & Buck photo ${i + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

    </main>
  );
}
