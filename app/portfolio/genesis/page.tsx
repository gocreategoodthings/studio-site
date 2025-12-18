"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function GenesisPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Reveal animation
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

  // Autoplay with sound ON
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  return (
    <main className="mx-auto max-w-[1600px] px-8 md:px-12 pt-32 pb-44 text-white">
      {/* Back */}
      <Link
        href="/#project-anchor"
        className="text-xs uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition mb-12 inline-block"
      >
        ← Back to Portfolio
      </Link>

      {/* Header */}
      <div className="max-w-[720px] mb-14">
        <h1 className="text-[38px] font-light tracking-tight mb-3 project-reveal">
          Genesis
        </h1>

        <p className="text-[15px] text-neutral-400 project-reveal">
          Editorial Cut · Edit · Sound
        </p>
      </div>

      {/* Video */}
      <div className="relative project-reveal rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition max-h-[76vh]">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dgeyxnh9i/video/upload/q_auto,f_auto/Genesis_optimized_dliqsw.mp4"
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover object-center scale-[1.02] bg-black"
        />

        {/* Sound toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 backdrop-blur-md bg-black/35 border border-white/15 text-white rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] hover:bg-black/45 transition"
        >
          {isMuted ? "Sound Off" : "Sound On"}
        </button>
      </div>

      {/* Editorial Copy */}
      <div className="mt-20 max-w-[680px] space-y-5 text-[15px] leading-relaxed text-neutral-400 project-reveal">
        <p>
          An editorial sequence built around restraint — allowing pacing,
          silence, and composition to carry meaning without overt direction.
        </p>

        <p>
          The structure follows the opening movement of Genesis, progressing from
          origin, to form, to purpose, using scripture as rhythm rather than narration.
        </p>

        <p className="text-neutral-500 text-[13px] leading-relaxed">
          Scripture excerpts referenced from Genesis 1:1, Genesis 1:26–27, and
          Genesis 1:28. Footage sourced from licensed stock. Edit and sound design
          by Brady Hudson.
        </p>
      </div>
    </main>
  );
}
