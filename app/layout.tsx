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
  openGraph: {
    title: "Brady Hudson",
    description: "Design · Editing · Photo/Video",
    url: "https://gocreategoodthings.com",
    siteName: "Brady Hudson",
    images: [
      {
        url: "/images/about-portrait.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/about-portrait.jpg"],
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
        <SmoothScroll>
          <HeaderBar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}