import { Geist, Geist_Mono } from "next/font/google";
import Navbaar from "./components/Navbaar";
import Footer from "./components/Footer";
import "./globals.css";
import Whatsappicon from "./components/Whatsappicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThesisLogix - Expert Thesis Writing & Research Consulting",
  description:
    "Get professional thesis assistance, research guidance, and academic writing support for PhD and PG students worldwide.",
  keywords: [
    "thesis writing services",
    "PhD research help",
    "dissertation consulting",
    "academic research support",
    "research paper editing",
    "scholarly publishing",
    "thesis proofreading",
  ],
  author: "ThesisLogix",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesislogix.com",
    title: "ThesisLogix - Your Research Partner",
    description:
      "Helping research scholars craft exceptional theses with expert guidance, editing, and proofreading.",
    site_name: "ThesisLogix",
    images: [
      {
        url: "https://thesislogix.com/logo.png", // ✅ Use absolute URL instead of `src`
        width: 1200,
        height: 630,
        alt: "ThesisLogix - Professional Thesis Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThesisLogix",
    title: "ThesisLogix - Research Assistance & Thesis Writing",
    description:
      "Expert thesis consulting services for PhD & PG scholars. Get research guidance, editing, and publishing support.",
    images: ["https://thesislogix.com/logo.png"], // ✅ Use absolute URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbaar />
        {children}
        <Footer />
        <Whatsappicon />
      </body>
    </html>
  );
}
