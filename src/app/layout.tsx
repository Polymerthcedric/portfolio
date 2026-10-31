import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidel Cedric Odoyo — Software Developer",
  description:
    "I build web apps and developer tools with TypeScript, React, Next.js, and Node. I care about clear scope, working releases, and how software behaves when something goes wrong.",
  openGraph: {
    type: "website",
    url: "https://fidelco.dev/",
    siteName: "fidelco.dev",
    title: "Fidel Cedric Odoyo — Software Developer",
    description:
      "I build web apps and developer tools with TypeScript, React, Next.js, and Node. I care about clear scope and working releases.",
    images: [
      {
        url: "https://fidelco.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Fidel Cedric Odoyo — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidel Cedric Odoyo — Software Developer",
    description:
      "I build web apps and developer tools with TypeScript, React, Next.js, and Node.",
    images: ["https://fidelco.dev/og.png"],
  },
  icons: {
    icon: {
      url: "/images/favicon.svg",
      type: "image/svg+xml",
    },
  },
  other: {
    "google-site-verification": "mht0HAr0s0Ii8LoYUngHkdtV5dnl3GLRd8PToaj0tF4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cBg text-cBody font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
