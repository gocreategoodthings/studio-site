"use client";

import { ReactNode, useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    // Only load Lenis on desktop for better mobile performance
    if (window.innerWidth >= 768) {
      import("@studio-freight/lenis").then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 0.65,
          easing: t => 1 - Math.pow(1 - t, 4),
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 1.1,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
          lenis.destroy();
        };
      });
    }
  }, []);

  return <>{children}</>;
}