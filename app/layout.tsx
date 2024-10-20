import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
