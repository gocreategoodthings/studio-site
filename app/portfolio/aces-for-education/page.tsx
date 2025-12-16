"use client";

import { useEffect } from "react";

export default function AcesForEducationPage() {
  // Local reveal animation just for this page
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
        Aces For Education — Midtown Barbers
      </h1>

      <p className="text-[15px] text-neutral-400 max-w-[600px] leading-relaxed mb-16 project-reveal">
        A poster design created for Midtown Barbers in Oklahoma City to promote
        their annual “Aces For Education” disc golf fundraiser.
      </p>

      {/* IMAGE GRID */}
      <div className="grid gap-10 md:grid-cols-2">

        {/* Image 1 */}
        <div className="project-reveal">
          <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition">
            <img
              src="/images/aces-for-education-photo.jpg"
              alt="Aces For Education Poster"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className="project-reveal">
          <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition">
            <img
              src="/images/aces-for-education-photo-2.jpg"
              alt="Aces For Education Additional Photo"
              className="w-full object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
