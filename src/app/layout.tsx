import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社トヨカゼ | 猫好きのためのSNSアプリ「にゃおしす」開発会社",
  description: "株式会社トヨカゼは猫好きのためのSNSアプリ「にゃおしす」を開発・運営しています。ペットテック領域で革新的なサービスを提供し、猫と人の絆を深める技術を追求します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
