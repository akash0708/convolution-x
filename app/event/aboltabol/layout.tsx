import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"),
  title: "Aboltabol | Convolution X",
  description:
    "Inspired by MIT’s ‘Bahfest’ & titled after Sukumar Ray’s cult classic, Abol Tabol is the dream come true event for those young brilliant minds who not only imagine scientifically impossible things but also possess the ability to land them on real ground",
    keywords: [
      "Aboltabol",
      "Convolution Abol Tabol",
      "Convo Abol Tabol",
      "Abol Tabol",
      "Convolution X Aboltabol",
      "Convolution 2025 Abol Tabol",
      "Convolution X",
      "scientific imagination",
      "MIT Bahfest",
      "Sukumar Ray",
      "science event",
      "young minds",
      "innovation",
    ],
    openGraph: {
    title: "Aboltabol | Convolution X",
    description:
      "Inspired by MIT’s ‘Bahfest’ & titled after Sukumar Ray’s cult classic, Abol Tabol is the dream come true event for those young brilliant minds who not only imagine scientifically impossible things but also possess the ability to land them on real ground",
    url: "https://www.convolutionjuee.in/event/aboltabol",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aboltabol | Convolution X",
    description:
      "Inspired by MIT’s ‘Bahfest’ & titled after Sukumar Ray’s cult classic, Abol Tabol is the dream come true event for those young brilliant minds who not only imagine scientifically impossible things but also possess the ability to land them on real ground",
    images: ["/opengraph-image.png"],
  },
};

export default function AboltabolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
