import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda } from "next/font/google";

export const metadata: Metadata = {
  title: "Zulfa & Megawati Weddings",
  description: "Wedding Invitation",
  openGraph: {
    type: "website",
    url: "http://localhost:3000", // replace with the correct URL
    title: "Zulfa & Megawati Weddings",
    description: "Wedding Invitation",
    images: [
      {
        url: "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1726891407/luxhuss33n8toe1jo0mr.png",
        width: 1200,
        height: 630,
        alt: "Wedding of Zulfa and Megawati",
      },
    ],
  },
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
