import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "Eureka | Convolution X",
  description:
    "Test your logic, reasoning, and puzzle-solving skills with Eureka! Join us at Convolution X for thrilling challenges that will push your mental agility to the limit.",
  openGraph: {
    title: "Eureka | Convolution X",
    description:
      "Welcome to Eureka! The ultimate test of logic, reasoning, and problem-solving at Convolution X. Assemble your team and take on thrilling challenges now!",
    url: "https://www.convolutionjuee.in/event/eureka",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"], // Automatically resolved using metadataBase
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eureka | Convolution X",
    description:
      "Sharpen your wits and tackle Eureka's thrilling puzzles at Convolution X! Test your mental agility with riddles, puzzles, and aptitude challenges.",
    images: ["/opengraph-image.png"], // Automatically resolved
  },
};

export default function EurekaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
