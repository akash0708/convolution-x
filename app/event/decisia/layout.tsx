import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convolutionjuee.in"), // Replace with your actual domain
  title: "Decisia | Convolution X",
  description:
    "Decisia is your platform to pitch your dream business idea. Become the CEO, showcase your product, depict profit margins, and pitch it to our esteemed panel of judges. Get ready to swim with the sharks!",
  openGraph: {
    title: "Decisia | Convolution X",
    description:
      "Pitch your dream business idea in front of a panel of esteemed judges. Showcase your product, depict the profit margins, and take your business to the next level at Decisia!",
    url: "https://www.convolutionjuee.in/event/decisia",
    siteName: "Convolution X",
    images: ["/opengraph-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decisia | Convolution X",
    description:
      "Pitch your dream business idea in front of a panel of esteemed judges. Showcase your product, depict the profit margins, and take your business to the next level at Decisia!",
    images: ["/opengraph-image.png"],
  },
};

export default function DecisiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
