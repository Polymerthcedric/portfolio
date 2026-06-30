import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidel Cedric Odoyo — Software Developer & AWS Cloud Practitioner",
  description:
    "Software developer and AWS Certified Cloud Practitioner specializing in Linux, Python, Node.js, and cloud infrastructure. Building custom tools, websites, and DevOps pipelines.",
  icons: {
    icon: [
      {
        url: "/portfolio/images/favicon.ico",
        href: "/portfolio/images/favicon.ico",
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
