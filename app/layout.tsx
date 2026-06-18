import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mikaella Ebora",
  description:
    "Portfolio of Mikaella Ebora — freelance video editor specializing in TikTok, Reels, and YouTube Shorts.",
  keywords: [
    "video editor",
    "content creator",
    "TikTok editor",
    "Reels editor",
    "YouTube Shorts",
    "Mika Ebora",
  ],
  authors: [{ name: "Mika Ebora" }],
  openGraph: {
    title: "Mika Ebora | Video Editor",
    description:
      "Crafting scroll-stopping short-form content for TikTok, Reels, and YouTube Shorts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
