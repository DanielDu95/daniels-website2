// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google"; // ✅ import Figtree
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Load font with a CSS variable
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Du - Full Stack Developer",
  description: "Portfolio website of Daniel Du, Full Stack Developer.",
  icons: {
    icon: "/images/hero.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={figtree.variable}>
      <body className="font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
