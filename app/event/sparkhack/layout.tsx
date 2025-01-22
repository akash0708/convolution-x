import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"), // Replace with your actual domain
  title: "SparkHack | Convolution X",
  description:
    "Welcome to Eastern India's biggest hackathon event, focusing on engineering technological solutions for modern world problems. Build prototypes with social impact and compete for groundbreaking innovations.",
  openGraph: {
    title: "SparkHack | Convolution X",
    description:
      "Join SparkHack, Eastern India's biggest hackathon event, where teams build products with a remarkable social impact. Register now and showcase your innovation!",
    url: "https://www.convolutionjuee.in/event/sparkhack",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkHack | Convolution X",
    description:
      "Join SparkHack, Eastern India's biggest hackathon event, where teams build products with a remarkable social impact. Register now and showcase your innovation!",
    images: ["/opengraph-image.png"],
  },
};

export default function SparkhackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
