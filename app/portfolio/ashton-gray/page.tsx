"use client";

import { useEffect } from "react";

export default function AshtonGray() {
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
          I helped guide the creative direction for Ashton Gray’s website,
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
          <a
            href="https://ashtongray.com"
            target="_blank"
            className="hover:text-white transition"
          >
            ashtongray.com ↗
          </a>
          <a
            href="https://ashtongray.com/investors/"
            target="_blank"
            className="hover:text-white transition"
          >
            Investor Portal ↗
          </a>
        </div>

        <div className="text-[12px] text-neutral-600 mt-6">
          Web development by{" "}
          <a
            href="https://coreylawrence.me/"
            target="_blank"
            className="hover:text-white transition"
          >
            Corey Lawrence
          </a>
          . Marketing collaboration with{" "}
          <a
            href="https://www.linkedin.com/in/megan-callicoat-b686b2267/"
            target="_blank"
            className="hover:text-white transition"
          >
            Megan Callicoat
          </a>
          .
        </div>
      </section>

      {/* COLOR PALETTE */}
      <section className="mb-32 project-reveal">
        <h2 className="text-[20px] font-light tracking-tight mb-6">
          Brand Color Palette
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 max-w-[720px]">
          {[
            "#25e9e2",
            "#7ee4b4",
            "#11573f",
            "#558eff",
            "#0c1421",
            "#000000",
            "#f9f9f9",
          ].map(color => (
            <div key={color} className="flex flex-col gap-2">
              <div
                className="h-[64px] rounded-sm border border-white/10"
                style={{ backgroundColor: color }}
              />
              <p className="text-[11px] tracking-wide text-neutral-500">
                {color}
              </p>
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
          A few vertical videos produced for leasing campaigns, optimized for
          social feeds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 project-reveal">
          {[1, 2, 3].map(num => (
            <div
              key={num}
              className="rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition"
            >
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
          A branded packaging system created for Ashton Gray’s annual gifting
          initiative. The goal was a premium minimal presentation that feels
          modern and intentional.
        </p>

        <div className="columns-1 sm:columns-2 gap-6 space-y-6 project-reveal">
          {[
            "coffee-box-1.jpg",
            "coffee-box-2.jpg",
            "coffee-box-3.gif",
            "coffee-box-4.jpg",
          ].map((file, index) => (
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
