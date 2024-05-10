import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dave Song Portfolio",
  description: "Dave Song Portfolio 2024 ver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-[1700px] mx-auto">
        <Navbar />
        <main className="flex flex-col relative overflow-hidden grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
