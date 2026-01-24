"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ---------------------------------------------
   PROJECT DATA
--------------------------------------------- */
const projects = [
  {
    title: "Commercial Real Estate Drone Reel",
    role: "Drone Photography · Videography · Edit · Color",
    slug: "agok-classen-norman",
    img: "/images/agok-cover.jpg",
    year: "2025",
  },
  {
    title: "Genesis",
    role: "Editorial Cut · Edit · Sound",
    slug: "genesis",
    img: "/images/genesis-cover.jpg",
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
    title: "Aces For Education | Midtown Barbers",
    role: "Poster Illustration · Graphic Design",
    slug: "aces-for-education",
    img: "/images/aces-for-education-photo.jpg",
    year: "2025",
  },
  {
    title: "Ashton Gray – Commercial Real Estate Marketing",
    role: "Brand · Web · Content",
    slug: "ashton-gray",
    img: "/images/ashton-gray-cover.jpg",
    year: "2025",
  },
];

const loop = [...projects, ...projects];

export default function HomePage() {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const serviceRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  /* ---------------------------------------------
     CARD REVEAL (Safari-safe)
  --------------------------------------------- */
  useEffect(() => {
    const run = () => {
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
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idle = (window as any).requestIdleCallback(run);
      return () =>
        (window as any).cancelIdleCallback?.(idle);
    } else {
      run();
    }
  }, []);

  /* ---------------------------------------------
     SERVICES REVEAL
  --------------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
          }
        }),
      { threshold: 0.3 }
    );

    serviceRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[1500px] px-4 sm:px-6 pb-32 sm:pb-40 pt-16 sm:pt-20 text-white relative overflow-hidden">
      {/* GLOBAL FX */}
      <div className="bw-grain" />
      <div className="horizontal-noise" />
      <div className="chromatic-aberration" />
      <div className="vignette" />

      {/* HERO */}
      <div className="relative w-full flex flex-col justify-center items-center h-[28vh] sm:h-[32vh] mb-10 sm:mb-12 hero-grit text-center">
        <div className="hero-film-lift" />

        <p className="cinematic-line z-[2] mb-2 sm:mb-3 text-[22px] sm:text-[26px]">
          go create good things.
        </p>

        <p className="z-[2] text-[12px] sm:text-[13px] tracking-wide text-neutral-500 px-4">
          Design · Editing · Visual Identity
        </p>
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <h1 className="mb-5 sm:mb-6 text-[34px] sm:text-[42px] font-light tracking-tight reveal-item">
          Selected Work
        </h1>

        <p className="mb-14 sm:mb-16 max-w-[540px] text-[14px] sm:text-[15px] text-neutral-400 leading-relaxed reveal-item">
          Cinematic pieces and visuals crafted for brands, products, and people
          who want their story to feel considered and intentional.
        </p>

        <div id="project-anchor" className="scroll-mt-[45vh] sm:scroll-mt-[55vh]" />

        <div className="relative w-full overflow-hidden hide-scrollbar parallax [content-visibility:auto]">
          <div
            className="rail-motion flex gap-12 sm:gap-16 py-2"
            style={{ animationDuration: "95s" }}
          >
            {loop.map((project, i) => (
              <Link
                key={`${project.slug}-${i}`}
                href={`/portfolio/${project.slug}`}
                ref={el => {
                  itemRefs.current[i] = el;
                }}
                className="reveal-item w-[220px] sm:w-[260px] flex-shrink-0 group"
              >
                <div className="h-[260px] sm:h-[300px] w-full overflow-hidden rounded-sm border border-white/5 group-hover:border-white/20 transition">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={520}
                    height={600}
                    sizes="(max-width: 640px) 220px, 260px"
                    quality={95}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.28,0.07,0.12,1)] group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                </div>

                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-neutral-500 mt-3 sm:mt-4">
                  {project.year}
                </p>

                <h3 className="mt-1 text-[14px] sm:text-[15px] font-light leading-tight">
                  {project.title}
                </h3>

                <p className="text-[11px] sm:text-[12px] text-neutral-500 mt-1 leading-relaxed">
                  {project.role}
                </p>

                <span className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wide text-neutral-300 group-hover:text-white transition">
                  View{" "}
                  <span className="inline-block text-sm transition group-hover:translate-x-[4px]">
                    ↗
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-28 sm:mt-36 mb-28 sm:mb-32 flex justify-center w-full">
        <div className="w-full max-w-[900px] flex flex-col items-start">
          <h2 className="text-[20px] sm:text-[22px] font-light mb-8 sm:mb-10 tracking-wide w-full">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-x-20 w-full">
            {[
              "Branding & Identity",
              "Drone Video / Photo",
              "Editing & Color",
              "Photography",
              "Web Design",
              "Marketing Creative",
            ].map((service, i) => (
              <p
                key={i}
                ref={el => {
                  serviceRefs.current[i] = el;
                }}
                className="service-item text-[14px] sm:text-[15px] text-neutral-300"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mt-12 sm:mt-20 flex flex-col md:flex-row items-center gap-12 sm:gap-20 mx-auto max-w-[1100px]"
      >
        <img
          src="/images/about-portrait.jpg"
          className="w-[260px] sm:w-[340px] h-[320px] sm:h-[400px] object-cover rounded-md"
        />

        <div className="max-w-[550px] text-center md:text-left">
          <h2 className="text-[24px] sm:text-[26px] font-light mb-4">
            Go Create Good Things.
          </h2>

          <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-relaxed mb-4">
            GCGT is shaped by the belief that every person carries the image of
            God, the imago dei.
          </p>

          <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-relaxed mb-4">
            I'm a designer, editor, and a creator.
          </p>

          <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-relaxed mb-6">
            If you want creative that feels sharp and thoughtful, let’s make
            something.
          </p>

          <div className="flex gap-6 text-[13px] justify-center md:justify-start">
            <a href="/#project-anchor" className="hover:text-white transition">
              View portfolio →
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 sm:mt-40 mb-8 sm:mb-10 w-full flex flex-col items-center text-neutral-500 text-[12px] sm:text-[13px] gap-4">
        <div className="flex gap-6 items-center">
          <a
            href="https://instagram.com/gocreategoodthings"
            target="_blank"
            className="footer-icon"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/bradyhudson"
            target="_blank"
            className="footer-icon"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="8" width="3" height="12" fill="currentColor" />
              <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" />
              <path
                d="M10 8h3v2.2a4 4 0 013-1.2c3 0 4 2 4 5.1V20h-3v-5.4c0-1.8-.5-2.9-2-2.9-1.4 0-2.2 1-2.3 2.8V20H10V8z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a href="mailto:gocreategoodthings@gmail.com" className="footer-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M22 7l-10 6L2 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>

        <p className="text-neutral-600 text-[11px] tracking-wide">
          © {new Date().getFullYear()} Brady Hudson
        </p>
      </footer>
    </main>
  );
}
