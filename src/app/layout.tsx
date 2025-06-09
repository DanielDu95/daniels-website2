// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Du - Full Stack Developer",
  description: "Portfolio website of Daniel Du, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
