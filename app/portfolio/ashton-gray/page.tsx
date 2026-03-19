"use client";

import { useEffect, useRef, useState } from "react";

export default function AshtonGray() {
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
        Ashton Gray Commercial Real Estate Marketing
      </h1>

      {/* SUBTITLE */}
      <p className="text-[15px] text-neutral-400 mb-16 project-reveal">
        Brand · Web · Content
      </p>

      {/* HERO VIDEO LABEL */}
      <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-500 mb-4 project-reveal">
        Basic animations created using After Effects
      </p>

      {/* HERO VIDEO */}
      <div className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition mb-32 project-reveal">
        <video
          src="/video/ashton-gray-brand-cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
        />
      </div>

      {/* WEBSITE DIRECTION */}
      <section className="max-w-[560px] mb-28 project-reveal">
        <p className="text-[15px] text-neutral-400 leading-relaxed mb-4">
          I helped guide the creative direction for Ashton Gray's website,
          shaping the visual system used across both the main site and the
          investor experience.
        </p>
        <p className="text-[15px] text-neutral-400 leading-relaxed mb-4">
          This included implementing the current color palette and presenting
          typographic direction. The site pairs{" "}
          <span className="text-neutral-200">EB Garamond</span> with{" "}
          <span className="text-neutral-200">Montserrat</span> to balance
          elegance with clarity across marketing and investor content.
        </p>
        <div className="flex flex-col gap-2 text-[13px] text-neutral-500 mt-6">
          <a href="https://ashtongray.com" target="_blank" className="hover:text-white transition">
            ashtongray.com ↗
          </a>
          <a href="https://ashtongray.com/investors/" target="_blank" className="hover:text-white transition">
            Investor Portal ↗
          </a>
        </div>
        <div className="text-[12px] text-neutral-600 mt-6">
          Web development by{" "}
          <a href="https://coreylawrence.me/" target="_blank" className="hover:text-white transition">
            Corey Lawrence
          </a>
          . Marketing collaboration with{" "}
          <a href="https://www.linkedin.com/in/megan-callicoat-b686b2267/" target="_blank" className="hover:text-white transition">
            Megan Callicoat
          </a>
          .
        </div>
      </section>

      {/* LEASING BROCHURE REDESIGN */}
      <BrochureComparison />

      {/* COLOR PALETTE */}
      <section className="mb-32 project-reveal">
        <h2 className="text-[20px] font-light tracking-tight mb-6">
          Brand Color Palette
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 max-w-[720px]">
          {["#25e9e2", "#7ee4b4", "#11573f", "#558eff", "#0c1421", "#000000", "#f9f9f9"].map(color => (
            <div key={color} className="flex flex-col gap-2">
              <div
                className="h-[64px] rounded-sm border border-white/10"
                style={{ backgroundColor: color }}
              />
              <p className="text-[11px] tracking-wide text-neutral-500">{color}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE VERTICAL VIDEOS */}
      <section className="mb-32">
        <h2 className="text-[20px] font-light tracking-tight mb-6 project-reveal">
          Mobile Video Content
        </h2>
        <p className="text-[15px] text-neutral-400 max-w-[500px] leading-relaxed mb-10 project-reveal">
          A few vertical videos produced for leasing campaigns, optimized for social feeds.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 project-reveal">
          {[1, 2, 3].map(num => (
            <div key={num} className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition">
              <video
                src={`/video/ashton-gray-mobile-${num}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[1080/1350] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* COFFEE GIFT BOX */}
      <section className="mb-32">
        <h2 className="text-[20px] font-light tracking-tight mb-6 project-reveal">
          Coffee Gift Box Design
        </h2>
        <p className="text-[15px] text-neutral-400 max-w-[500px] leading-relaxed mb-12 project-reveal">
          A branded packaging system created for Ashton Gray's annual gifting
          initiative. The goal was a premium minimal presentation that feels
          modern and intentional.
        </p>
        <div className="columns-1 sm:columns-2 gap-6 space-y-6 project-reveal">
          {["coffee-box-1.jpg", "coffee-box-2.jpg", "coffee-box-3.gif", "coffee-box-4.jpg"].map((file, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition break-inside-avoid"
            >
              <img
                src={`/images/${file}`}
                alt={`Coffee Gift Box ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* --------------------------------------------------
   BROCHURE COMPARISON COMPONENT
-------------------------------------------------- */
function BrochureComparison() {
  const beforePages = 3;
  const afterPages = 9;

  const [beforeIndex, setBeforeIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);

  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation — arrow keys when hovering each panel
  const handleBeforeKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setBeforeIndex(i => Math.min(i + 1, beforePages - 1));
    if (e.key === "ArrowLeft") setBeforeIndex(i => Math.max(i - 1, 0));
  };

  const handleAfterKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setAfterIndex(i => Math.min(i + 1, afterPages - 1));
    if (e.key === "ArrowLeft") setAfterIndex(i => Math.max(i - 1, 0));
  };

  // Touch swipe support
  const useTouchSwipe = (
    onSwipeLeft: () => void,
    onSwipeRight: () => void
  ) => {
    const startX = useRef<number | null>(null);
    return {
      onTouchStart: (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
      },
      onTouchEnd: (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const diff = startX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
          diff > 0 ? onSwipeLeft() : onSwipeRight();
        }
        startX.current = null;
      },
    };
  };

  const beforeSwipe = useTouchSwipe(
    () => setBeforeIndex(i => Math.min(i + 1, beforePages - 1)),
    () => setBeforeIndex(i => Math.max(i - 1, 0))
  );

  const afterSwipe = useTouchSwipe(
    () => setAfterIndex(i => Math.min(i + 1, afterPages - 1)),
    () => setAfterIndex(i => Math.max(i - 1, 0))
  );

  return (
    <section className="mb-32 project-reveal">
      <h2 className="text-[20px] font-light tracking-tight mb-3">
        Leasing Brochure Redesign
      </h2>
      <p className="text-[15px] text-neutral-400 max-w-[560px] leading-relaxed mb-12">
        Rebuilt the leasing brochure template from a generic light layout into
        a dark, brand-aligned system now used across all Ashton Gray property
        marketing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* BEFORE */}
        <div
          className="flex flex-col gap-3 outline-none"
          tabIndex={0}
          onKeyDown={handleBeforeKey}
          ref={beforeRef}
        >
          {/* Label row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 border border-white/10 rounded-sm px-2 py-1">
                Before
              </span>
              <span className="text-[12px] text-neutral-500">Generic template</span>
            </div>
            <span className="text-[11px] text-neutral-600 tabular-nums">
              {beforeIndex + 1} / {beforePages}
            </span>
          </div>

          {/* Image viewer */}
          <div
            className="relative rounded-md overflow-hidden border border-white/10 opacity-50 cursor-default select-none"
            {...beforeSwipe}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.1,1)]"
              style={{ transform: `translateX(-${beforeIndex * 100}%)` }}
            >
              {Array.from({ length: beforePages }).map((_, n) => (
                <img
                  key={n}
                  src={`/images/brochure-before-${n + 1}.png`}
                  alt={`Original brochure page ${n + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  draggable={false}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-1">
            <button
              onClick={() => setBeforeIndex(i => Math.max(i - 1, 0))}
              disabled={beforeIndex === 0}
              className="text-[12px] text-neutral-500 hover:text-white disabled:opacity-20 transition px-1"
            >
              ← Prev
            </button>
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: beforePages }).map((_, n) => (
                <button
                  key={n}
                  onClick={() => setBeforeIndex(n)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    n === beforeIndex ? "bg-neutral-400 w-3" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setBeforeIndex(i => Math.min(i + 1, beforePages - 1))}
              disabled={beforeIndex === beforePages - 1}
              className="text-[12px] text-neutral-500 hover:text-white disabled:opacity-20 transition px-1"
            >
              Next →
            </button>
          </div>
        </div>

        {/* AFTER */}
        <div
          className="flex flex-col gap-3 outline-none"
          tabIndex={0}
          onKeyDown={handleAfterKey}
          ref={afterRef}
        >
          {/* Label row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white border border-white/30 rounded-sm px-2 py-1 bg-white/5">
                Redesign
              </span>
              <span className="text-[12px] text-neutral-300">Brady Hudson × Ashton Gray</span>
            </div>
            <span className="text-[11px] text-neutral-400 tabular-nums">
              {afterIndex + 1} / {afterPages}
            </span>
          </div>

          {/* Image viewer */}
          <div
            className="relative rounded-md overflow-hidden border border-white/20 ring-1 ring-white/10 cursor-default select-none"
            {...afterSwipe}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.1,1)]"
              style={{ transform: `translateX(-${afterIndex * 100}%)` }}
            >
              {Array.from({ length: afterPages }).map((_, n) => (
                <img
                  key={n}
                  src={`/images/brochure-after-${n + 1}.png`}
                  alt={`Redesigned brochure page ${n + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  draggable={false}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-1">
            <button
              onClick={() => setAfterIndex(i => Math.max(i - 1, 0))}
              disabled={afterIndex === 0}
              className="text-[12px] text-neutral-400 hover:text-white disabled:opacity-20 transition px-1"
            >
              ← Prev
            </button>
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: afterPages }).map((_, n) => (
                <button
                  key={n}
                  onClick={() => setAfterIndex(n)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    n === afterIndex ? "bg-white w-3" : "bg-neutral-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setAfterIndex(i => Math.min(i + 1, afterPages - 1))}
              disabled={afterIndex === afterPages - 1}
              className="text-[12px] text-neutral-400 hover:text-white disabled:opacity-20 transition px-1"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}