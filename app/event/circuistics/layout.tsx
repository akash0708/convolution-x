import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "Circuistics | Convolution X",
  description:
    "Unleash your inner inventor with Circuistics! Design innovative electronics projects, showcase creativity, and compete for exciting prizes at Convolution X.",
  keywords: [
    "Circuistics",
    "Convolution 2025 Circuistics",
    "Convolution 25 Circuistics",
    "Convolution X Circuistics",
    "electronics",
    "circuit design",
    "JUEE",
    "electronics competition",
    "innovation",
    "creative electronics",
  ],
    openGraph: {
    title: "Circuistics | Convolution X",
    description:
      "Unleash your inner inventor with Circuistics! Design your electronic masterpiece, showcase creativity, and compete for exciting prizes at Convolution X.",
    url: "https://www.convolutionjuee.in/event/circuistics",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circuistics | Convolution X",
    description:
      "Unleash your inner inventor with Circuistics! Design innovative electronics projects and compete for exciting prizes. Join us now!",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function CircuisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
