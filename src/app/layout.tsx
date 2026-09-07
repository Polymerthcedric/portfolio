import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidel Cedric Odoyo — Software Developer · DevSecOps-minded",
  description:
    "I ship web products on a boring, defensible stack — TypeScript and Next.js on the front, Node and Postgres on the back. Building custom tools, websites, and DevOps pipelines.",
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
    ],
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
