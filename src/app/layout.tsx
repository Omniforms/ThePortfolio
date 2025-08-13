
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Portfolio",
  description: "I believe and therefore I will",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
