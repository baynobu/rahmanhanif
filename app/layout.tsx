import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahman Hanif — Backend Developer",
  description:
    "Portofolio dan CV Rahman Hanif. Backend Developer & Tech Enthusiast yang berfokus pada arsitektur microservices, REST API, dan basis data.",
  keywords: [
    "Rahman Hanif",
    "baynobu",
    "Backend Developer",
    "Tech Enthusiast",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Microservices",
    "Politeknik Negeri Malang",
  ],
  authors: [{ name: "Rahman Hanif", url: "https://github.com/baynobu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
