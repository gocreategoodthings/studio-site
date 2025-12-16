"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OxidianPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);

      if (!newMutedState) {
        videoRef.current.volume = 1;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 pt-24 pb-24 text-[#E9EBF2]">
      {/* Back */}
      <Link
        href="/#project-anchor"
        className="text-xs uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition mb-10 inline-block"
      >
        ← Back to Portfolio
      </Link>

      {/* HERO BLOCK */}
      <section className="mb-20">
        <div className="max-w-[560px]">
          <Image
            src="/images/OxidianLogo.webp"
            alt="Oxidian Logo"
            width={560}
            height={160}
            priority
            className="opacity-95"
          />
        </div>

        <p className="mt-10 max-w-2xl text-[15px] text-neutral-400 leading-relaxed">
          A speculative extreme weather and action sports gear system built for
          snow, altitude, speed, and impact scenarios. Engineered for hostile
          environments and high risk movement.
        </p>
      </section>

      {/* HERO VIDEO */}
      <section className="mb-24 relative">
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black relative">
          <video
            ref={videoRef}
            src="/video/Oxidian-Hero-Video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          <button
            onClick={handleToggleMute}
            className="
              absolute bottom-6 right-6
              px-5 py-3 text-[11px] tracking-[0.2em]
              uppercase font-medium
              bg-white/10 backdrop-blur-md
              border border-white/20
              rounded-lg
              text-[#E9EBF2]
              flex items-center gap-2
              hover:bg-white/20 hover:border-white/30
              transition-all duration-300
              shadow-[0_4px_20px_rgba(0,0,0,0.4)]
            "
          >
            <div className="w-2.5 h-2.5 rounded-sm bg-[#003CFF]" />
            {isMuted ? "Enable Sound" : "Mute Sound"}
          </button>
        </div>
      </section>

      {/* SYSTEM IDENTITY */}
      <section className="mb-24">
        <h2 className="text-[22px] font-light tracking-wide mb-10">
          System Identity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Primary Mark */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-3 text-neutral-400">
              Primary Mark
            </h3>

            <div className="bg-[#0A0A0A] border border-neutral-800 p-6 rounded-lg flex justify-center">
              <Image
                src="/images/OxidianLogo.webp"
                alt="Oxidian Logo"
                width={360}
                height={110}
                className="opacity-90"
              />
            </div>
          </div>

          {/* Color System */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-3 text-neutral-400">
              Color System
            </h3>

            <div className="space-y-4">
              {[
                { color: "#000000", bg: "#000000" },
                { color: "#003CFF", bg: "#003CFF" },
                { color: "#A1B4FF", bg: "#A1B4FF" },
                { color: "#E9EBF2", bg: "#E9EBF2" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-sm border border-neutral-700"
                    style={{ background: c.bg }}
                  />
                  <span className="text-neutral-400">{c.color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Type System */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-3 text-neutral-400">
              Type System
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Wide brutalist sans for logos and headlines
              <br />
              Technical sans for body copy
              <br />
              Monospace for UI and data panels
            </p>
          </div>
        </div>
      </section>

      {/* CONCEPTS: OUTERWEAR + BOARD (SIDE BY SIDE) */}
      <section className="mb-28">
        <h2 className="text-[22px] font-light tracking-wide mb-10">
          Extreme Weather Concepts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Puffer (smaller) */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Outerwear
            </p>
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-black/20 flex justify-center">
              <Image
                src="/images/oxidian_pufferjacket.png"
                alt="Oxidian Puffer Jacket Concept"
                width={520}
                height={650}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Snowboard system */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Snowboard System
            </p>
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-black/20">
              <Image
                src="/images/oxidian-board-system.png"
                alt="Oxidian Snowboard System"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="opacity-40 tracking-[0.25em] text-xs">
        OXIDIAN SYSTEMS 2025
      </section>
    </main>
  );
}
