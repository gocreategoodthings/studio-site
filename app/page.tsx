"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ---------------------------------------------
   PROJECT DATA
--------------------------------------------- */
const projects = [
  {
    title: "Ashton Gray – Commercial Real Estate Marketing",
    role: "Brand · Web · Content",
    slug: "ashton-gray",
    img: "/images/ashton-gray-cover.jpg",
    year: "2026",
  },
  {
    title: "OXIDIAN: Outdoor Gear Concept",
    role: "Design · Identity · Concept",
    slug: "oxidian",
    img: "/images/oxidian-cover.jpg",
    year: "2025",
  },
  {
    title: "Hudson & Buck",
    role: "Brand · Product · Photography",
    slug: "hudson-and-buck",
    img: "/images/hb-1.jpg",
    year: "2023",
  },
  {
    title: "Genesis",
    role: "Editorial Cut · Edit · Concept",
    slug: "genesis",
    img: "/images/genesis-cover.jpg",
    year: "2025",
  },
  {
    title: "Commercial Real Estate Drone Reel",
    role: "Drone Photography · Videography · Edit · Color",
    slug: "agok-classen-norman",
    img: "/images/agok-cover.jpg",
    year: "2025",
  },
  {
    title: "Aces For Education | Midtown Barbers",
    role: "Poster Illustration · Graphic Design",
    slug: "aces-for-education",
    img: "/images/aces-for-education-photo.jpg",
    year: "2025",
  },
];

export default function HomePage() {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="mx-auto max-w-[1500px] px-4 sm:px-6 pb-32 sm:pb-40 pt-12 sm:pt-16 text-white relative overflow-hidden">

      <div className="bw-grain" />
      <div className="horizontal-noise" />
      <div className="chromatic-aberration" />
      <div className="vignette" />

      {/* HERO */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] flex flex-col justify-center items-center text-center mb-20 sm:mb-24 overflow-hidden overflow-x-hidden hero-grit">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
        <h1 className="hero-f1 text-[30px] sm:text-[72px] font-semibold tracking-tight leading-[1.1] sm:leading-[1.05] mb-5 sm:mb-6">
          go create good things.
        </h1>
        <p className="text-[12px] sm:text-[15px] tracking-[0.25em] uppercase text-neutral-500">
          Design · Editing · Visual Identity
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-24 sm:scroll-mt-32">
        <h1 className="mb-5 sm:mb-6 text-[32px] sm:text-[52px] font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Selected Work
        </h1>

        <p className="mb-12 sm:mb-16 max-w-[560px] text-[14px] sm:text-[15px] text-neutral-400 leading-relaxed">
          Visuals crafted for brands, products, and people
          who want their story to feel considered and authentic.
        </p>

        {/* FEATURED */}
        <Link
          href="/portfolio/agif-origins-story"
          className="block mb-16 sm:mb-20 group reveal-item"
          ref={el => { itemRefs.current[0] = el; }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center border border-white/10 rounded-md p-5 sm:p-8 group-hover:border-white/25 transition">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-white/5">
              <Image
                src="/images/agif-origins-thumb.jpg"
                alt="AGIF Origins Story"
                fill
                sizes="100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.02]"
                priority
              />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                Featured · 2026
              </p>
              <h3 className="mt-2 text-[24px] sm:text-[32px] font-semibold leading-tight">
                AGIF Origins Story
              </h3>
              <p className="text-[13px] sm:text-[14px] text-neutral-400 mt-3">
                Production · Edit · Story
              </p>
              <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-[11px] sm:text-[12px] uppercase tracking-wide text-neutral-300 group-hover:text-white transition">
                Watch ↗
              </span>
            </div>
          </div>
        </Link>

        {/* PROJECTS */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              ref={el => { itemRefs.current[i + 1] = el; }}
              className="block group reveal-item"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center border border-white/10 rounded-md p-5 sm:p-8 group-hover:border-white/25 transition">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-white/5">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className={`transition duration-[1200ms] ease-out group-hover:scale-[1.02] ${
                      project.slug === "oxidian"
                        ? "object-cover object-[50%_75%]"
                        : "object-cover"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                    {project.year}
                  </p>
                  <h3 className="mt-2 text-[22px] sm:text-[28px] font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-400 mt-3">
                    {project.role}
                  </p>
                  <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-[11px] sm:text-[12px] uppercase tracking-wide text-neutral-300 group-hover:text-white transition">
                    View ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-32 mt-32 sm:mt-40 mb-32 sm:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-[1200px]">

          {/* LEFT — TEXT */}
          <div>
            <h2 className="mb-8 text-sm tracking-widest text-neutral-500">ABOUT</h2>

            <p className="text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed mb-10">
              I'm Brady, a designer, editor, and aerial photographer based in Oklahoma City. I believe we're made in the image of God, the <em>imago dei</em>, and that work done with real purpose reflects that. Currently the Design and Visuals Specialist at Ashton Gray Real Estate, doing freelance work through Go Create Good Things, and an FAA-certified drone pilot who cares about making things that are more than just aesthetically pleasing.
            </p>

            <a href="/contact" className="text-sm text-neutral-300 hover:text-white transition underline-offset-4 hover:underline">
              Work together →
            </a>
          </div>

          {/* RIGHT — PORTRAIT */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/about-portrait.jpg"
              alt="Brady Hudson"
              className="w-full max-w-[320px] md:max-w-[380px] rounded-xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="mt-32 sm:mt-40 pb-12 sm:pb-16">
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-neutral-500">
          <div className="flex-1 h-px bg-white/10" />
          <span className="whitespace-nowrap">© 2026 Brady Hudson</span>
          <button
            onClick={scrollToTop}
            className="whitespace-nowrap flex items-center gap-2 hover:text-white transition duration-300"
          >
            Back to Top ↑
          </button>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </footer>

    </main>
  );
}