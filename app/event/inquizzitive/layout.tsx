import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "Inquizzitive | Convolution X",
  description:
    "Challenge your knowledge with Inquizzitive, the ultimate quiz competition at Convolution X. Explore topics like general knowledge, current affairs, science, history, and music while promoting curiosity, learning, and teamwork!",
  keywords: [
    "Inquizzitive",
    "quiz competition",
    "Convolution 2025 quiz",
    "Convolution X quiz",
    "general knowledge",
    "current affairs",
    "science quiz",
    "history quiz",
    "music quiz",
    "team spirit",
    "learning competition",
    "JUEE",
  ],
  openGraph: {
    title: "Inquizzitive | Convolution X",
    description:
      "Test your intellect and teamwork at Inquizzitive, the thrilling quiz competition at Convolution X. Dive into topics like general knowledge, current affairs, science, history, and music!",
    url: "https://www.convolutionjuee.in/event/inquizzitive",
    siteName: "Convolution 2025",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inquizzitive | Convolution X",
    description:
      "Get ready for Inquizzitive, the exciting quiz competition at Convolution X! Explore diverse topics, challenge your intellect, and showcase your team spirit. Join now and ignite your curiosity!",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function InquizzitiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
