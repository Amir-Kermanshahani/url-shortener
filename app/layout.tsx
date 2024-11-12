import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js URL Shortener App",
  description: "A single page web application powered by Next.js, Shadcn-ui and Vercel PostgreSQL database to shorten your desired URL and share them easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazir.className} antialiased`}>{children}</body>
    </html>
  );
}
