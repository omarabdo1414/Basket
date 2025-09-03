import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { CartProvider } from "./contexts/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey = Jersey_10({
  subsets: ["latin"],
  variable: "--font-jersey",
  weight: "400",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jersey.variable} antialiased`}
      >
        <Header />
        <main>
            <CartProvider>
                {children}
            </CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
