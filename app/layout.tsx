import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convolution X | Annual Techno-Management Fest of JUEE",
  description:
    "Convolution, the annual technical fest of JUEE, is a vibrant celebration of talent, creativity, and innovation, showcasing a diverse range of competitions, events, and activities.",
  keywords: [
    "Convolution X",
    "Jadavpur University",
    "JUEE",
    "fest",
    "technical fest",
    "electrical engineering",
    "Convolution 2025",
  ],
  authors: [
    { name: "JUEE Student's Forum", url: "https://www.convolutionjuee.in" },
  ],
  publisher: "Jadavpur University Electrical Engineering Students' Forum",
  twitter: {
    card: "summary_large_image",
    title: "Convolution X | Annual Techno-Management Fest of JUEE",
    description:
      "Celebrate creativity and innovation at Convolution X, JUEE's annual technical fest.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
