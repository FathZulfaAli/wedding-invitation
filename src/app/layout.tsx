import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda } from "next/font/google";

export const metadata: Metadata = {
  title: "Zulfa 🖤 Megawati",
  description: "Wedding Invitation",
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body className={bodoniModa.className}>{children}</body>
    </html>
  );
}
