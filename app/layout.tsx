import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure Source Code Pro font
const sourceCodePro = Inter({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "DFIR Masson",
  description: "All about DFIR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}