import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jody Greenstone Miller",
    template: "%s | Jody Greenstone Miller",
  },
  description:
    "Jody Greenstone Miller — Co-Founder & former CEO of Business Talent Group. Thought leader on the future of work, entrepreneurship, and leadership.",
  openGraph: {
    title: "Jody Greenstone Miller",
    description:
      "Co-Founder & former CEO of Business Talent Group. Thought leader on the future of work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jody Greenstone Miller",
    description:
      "Co-Founder & former CEO of Business Talent Group. Thought leader on the future of work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
