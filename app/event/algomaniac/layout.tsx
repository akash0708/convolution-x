import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "Algomaniac | Convolution X",
  description:
    "Challenge your mind with Algomaniac! Solve puzzling problems and mind-boggling tasks in this competitive programming event at Convolution X.",
    keywords: [
      "Algomaniac",
      "Convolution X Algomaniac",
      "Convolution 2025 Algomaniac",
      "competitive programming",
      "Convolution 2025",
      "Convolution 25",
      "Convolution X",
      "coding challenges",
      "problem solving",
      "algorithm contest",
      "data structures",
      "JUEE events",
      "coding competitions",
      "programming contests",
      "Convolution X coding",
    ],
  openGraph: {
    title: "Algomaniac | Convolution X",
    description:
      "Put your coding skills to the test with Algomaniac, the competitive programming event of Convolution X. Solve challenging problems and showcase your talent!",
    url: "https://www.convolutionjuee.in/event/algomaniac",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algomaniac | Convolution X",
    description:
      "Dive into the world of competitive programming with Algomaniac! Solve challenging problems, showcase your coding prowess, and compete for glory.",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function AlgomaniacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
