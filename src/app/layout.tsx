import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Styles
import './assets/css/setup.css';
import './assets/css/sm-clean.css';
import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volos - Nextjs Portfolio Template",
  description: "Volos - Nextjs Portfolio Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isLanding={false} />
        {children}
      </body>
    </html>
  );
}
