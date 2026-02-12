"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ---------------------------------------------
   PROJECT DATA
--------------------------------------------- */
const projects = [
  {
    title: "Genesis",
    role: "Editorial Cut · Edit · Concept",
    slug: "genesis",
    img: "/images/genesis-cover.jpg",
    year: "2025",
  },
  {
    title: "Ashton Gray – Commercial Real Estate Marketing",
    role: "Brand · Web · Content",
    slug: "ashton-gray",
    img: "/images/ashton-gray-cover.jpg",
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
    title: "OXIDIAN: Outdoor Gear Concept",
    role: "Design · Identity · Concept",
    slug: "oxidian",
    img: "/images/oxidian-cover.jpg",
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

const loop = [...projects, ...projects];

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

  return (
    <main className="mx-auto max-w-[1500px] px-4 sm:px-6 pb-40 pt-16 sm:pt-20 text-white relative overflow-hidden">
      
      <div className="bw-grain" />
      <div className="horizontal-noise" />
      <div className="chromatic-aberration" />
      <div className="vignette" />

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center items-center text-center mb-24 overflow-hidden overflow-x-hidden hero-grit">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />

        <h1 className="hero-f1 text-[34px] sm:text-[72px] font-semibold tracking-tight leading-[1.05] mb-6">
          go create good things.
        </h1>

        <p className="text-[13px] sm:text-[15px] tracking-[0.25em] uppercase text-neutral-500">
          Design · Editing · Visual Identity
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-32">
        <h1 className="mb-6 text-[40px] sm:text-[52px] font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Selected Work
        </h1>

        <p className="mb-16 max-w-[560px] text-[15px] text-neutral-400 leading-relaxed">
          Visuals crafted for brands, products, and people
          who want their story to feel considered and authentic.
        </p>

        <a
          href="/portfolio/agif-origins-story"
          className="block mb-14 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-white/10 rounded-md p-6 group-hover:border-white/25 transition">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-white/5">
              <Image
                src="/images/agif-origins-thumb.jpg"
                alt="AGIF Origins Story"
                fill
                sizes="100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.02] group-hover:opacity-90"
                priority
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                Featured · 2026
              </p>
              <h3 className="mt-2 text-[28px] font-semibold leading-tight">
                AGIF Origins Story
              </h3>
              <p className="text-[14px] text-neutral-400 mt-3">
                Production · Edit · Story
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-wide text-neutral-300 group-hover:text-white transition">
                Watch ↗
              </span>
            </div>
          </div>
        </a>

        <div className="relative w-full overflow-hidden hide-scrollbar">
          <div className="rail-motion flex gap-16 py-2">
            {loop.map((project, i) => (
              <Link
                key={`${project.slug}-${i}`}
                href={`/portfolio/${project.slug}`}
                ref={el => { itemRefs.current[i] = el; }}
                className="reveal-item w-[260px] flex-shrink-0 group"
              >
                <div className="h-[300px] w-full overflow-hidden rounded-sm border border-white/5 group-hover:border-white/20 transition">
                  <Image
  src={project.img}
  alt={project.title}
  width={520}
  height={600}
  loading="lazy"
  sizes="(max-width: 768px) 70vw, 260px"
  className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04]"
/>
                </div>

                <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-500 mt-4">
                  {project.year}
                </p>
                <h3 className="mt-1 text-[16px] font-medium">
                  {project.title}
                </h3>
                <p className="text-[13px] text-neutral-500 mt-1">
                  {project.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-48 text-center scroll-mt-32">
        <h2 className="text-[42px] sm:text-[56px] font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Services
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-40 max-w-[900px] mx-auto text-left">
          <div className="space-y-8 text-[20px] font-medium text-neutral-200">
            <p>Branding & Identity</p>
            <p>Editing & Color</p>
            <p>Web Design</p>
          </div>

          <div className="space-y-8 text-[20px] font-medium text-neutral-200">
            <p>Drone Video / Photo</p>
            <p>Photography</p>
            <p>Marketing Creative</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center scroll-mt-32"
      >
        <div className="relative w-full max-w-[480px] mx-auto md:mx-0">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md border border-white/10">
            <Image
              src="/images/about-portrait.jpg"
              alt="Brady Hudson"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Go Create Good Things.
          </h2>

          <p className="mt-6 text-[15px] text-neutral-400 leading-relaxed max-w-[520px]">
            GCGT is shaped by the belief that every person carries the image of
            God, the imago dei.
          </p>

          <p className="mt-4 text-[15px] text-neutral-400 leading-relaxed max-w-[520px]">
            I’m a designer, editor, and a creator.
          </p>

          <p className="mt-4 text-[15px] text-neutral-400 leading-relaxed max-w-[520px]">
            If you want creative that feels sharp and thoughtful, let’s make
            something.
          </p>

          <div className="mt-8 flex items-center gap-8 text-[14px] font-medium text-neutral-300">
            <a href="#portfolio" className="hover:text-white transition">
              View portfolio →
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 text-center text-[12px] text-neutral-500">
        © 2026 Brady Hudson
      </footer>

    </main>
  );
}
