import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Caleb Bratton",
  description: "Caleb Bratton Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
