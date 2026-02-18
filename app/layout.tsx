import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import HeaderBar from "./components/HeaderBar";
import SmoothScroll from "./components/SmoothScroll";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brady Hudson",
  description: "Design · Editing · Photo/Video",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-black text-white pt-20`}>
        {/* Mobile Block - Shows message on screens smaller than 768px */}
        <div className="block md:hidden fixed inset-0 bg-black z-50 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Desktop Only</h1>
            <p className="text-neutral-400">
              This site is currently optimized for desktop viewing only.
              <br />
              Please visit on a desktop or laptop computer.
            </p>
          </div>
        </div>

        {/* Desktop Content - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <SmoothScroll>
            <HeaderBar />
            {children}
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}