import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/common/Provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroFlow AI — Work Smarter with AI-Powered Focus",
  description:
    "AI-powered task and focus management platform that helps students, developers, and professionals eliminate distractions and increase productivity.",
  metadataBase: new URL("https://neuroflow.ai"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "NeuroFlow AI — Work Smarter with AI-Powered Focus",
    description:
      "AI-powered productivity platform that automatically prioritizes tasks, predicts workload stress, and optimizes your schedule.",
    type: "website",
    siteName: "NeuroFlow AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroFlow AI",
    description: "Work Smarter with AI-Powered Focus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0F172A] text-white`}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
