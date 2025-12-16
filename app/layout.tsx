import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import HeaderBar from "./components/HeaderBar";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Brady Hudson",
  description: "Design · Editing · Photo/Video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} bg-black text-white pt-20`}
      >
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
