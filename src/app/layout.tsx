import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";

const asap = Asap({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-asap",
});

export const metadata: Metadata = {
  title: "RatingsIQ",
  description: "Collect honest feedback. Share only what helps.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${asap.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
