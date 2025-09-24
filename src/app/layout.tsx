import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autera - AI Automation Solutions",
  description: "Intelligent automation systems for small to mid-sized businesses.",
  icons: {
    icon: '/images/partners/auterafavicon.png',
    shortcut: '/images/partners/auterafavicon.png',
    apple: '/images/partners/auterafavicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
