import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/dosis";
 import { Dosis, Inter } from "next/font/google";

 const dosis = Dosis({
   subsets: ["latin"],
   variable: "--font-dosis", // export as CSS variable
 });

 const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
 });
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Basket",
  description: "E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dosis.variable} ${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Header /> 
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
