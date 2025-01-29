import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "JU Talks | Convolution X",
  description:
    "Join JU Talks for a dynamic panel discussion featuring industry professionals, field veterans, and technology experts. Explore trends, challenges, and innovations shaping today's world.",
  keywords: [
    "JU Talks",
    "Convolution 2025 jutalks",
    "Convolution X jutalks",
    "Convolution JUEE jutalks",
    "JU Talks 2025",
    "panel discussion",
    "industry professionals",
    "field veterans",
    "JUEE",
    "Convolution JUEE",
  ],
  openGraph: {
    title: "JU Talks | Convolution X",
    description:
      "Discover insights from industry leaders at JU Talks. Explore trends, challenges, and innovations shaping the modern world through enriching discussions and unique perspectives.",
    url: "https://www.convolutionjuee.in/event/jutalks",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Talks | Convolution X",
    description:
      "Explore the future at JU Talks! Engage with industry professionals, field veterans, and technology experts discussing trends and innovations shaping our world.",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function JUTalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
