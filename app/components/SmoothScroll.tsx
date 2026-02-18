"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis: any;

    if (window.innerWidth >= 768) {
      import("@studio-freight/lenis").then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 0.65,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 1.1,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 👇 reset scroll on route change
        lenis.scrollTo(0, { immediate: true });
      });
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [pathname]); // 👈 key change

  return <>{children}</>;
}
