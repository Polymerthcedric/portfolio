import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidel Cedric Odoyo — Software Developer · DevSecOps-minded",
  description:
    "I ship web products on a boring, defensible stack — TypeScript and Next.js on the front, Node and Postgres on the back. Building custom tools, websites, and DevOps pipelines.",
  openGraph: {
    type: "website",
    url: "https://fidelco.dev/",
    siteName: "fidelco.dev",
    title: "Fidel Cedric Odoyo — Software Developer · DevSecOps-minded",
    description:
      "I ship web products on a boring, defensible stack — TypeScript and Next.js on the front, Node and Postgres on the back.",
    images: [
      {
        url: "https://fidelco.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Fidel Cedric Odoyo — Software Developer · DevSecOps-minded",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidel Cedric Odoyo — Software Developer",
    description:
      "I ship web products on TypeScript and Next.js, with a DevSecOps mindset.",
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
