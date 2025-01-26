import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "24 Frames | Convolution X",
  description:
    "Showcase your photography skills in 24 Frames, an open-theme photo contest at Convolution X. Submit captivating photos with captions and compete for Judges’ and People’s Choice awards. Top entries will be showcased for public voting!",
  keywords: [
    "24 Frames",
    "Convolution 2025 24frames",
    "Convolution 24frames",
    "Convolution X 24 Frames",
    "photography",
    "photo contest",
    "JUEE",
    "photography competition",
  ],
  openGraph: {
    title: "24 Frames | Convolution X",
    description:
      "Unleash your creativity at 24 Frames, an open-theme photo contest. Compete for Judges’ and People’s Choice awards, with top entries showcased for public voting at Convolution X.",
    url: "https://www.convolutionjuee.in/event/24-frames",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Frames | Convolution X",
    description:
      "Participate in 24 Frames, the ultimate open-theme photo contest at Convolution X! Submit your best photos with captions and compete for exciting awards. Let your lens do the talking!",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function FramesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
