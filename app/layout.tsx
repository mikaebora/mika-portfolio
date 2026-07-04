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
  title: "Mikaella | Video Editor",
  description:
    "Portfolio of Mikaella Ebora",
  keywords: [
    "video editor",
    "content creator",
    "TikTok editor",
    "Reels editor",
    "YouTube Shorts",
    "Mika Ebora",
    "Freelance",
  ],
  authors: [{ name: "Mika Ebora" }],
  openGraph: {
    title: "Mika Ebora | Video Editor",
    description:
      "Creating engaging video content for creators, brands, and businesses across today's leading social media platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
