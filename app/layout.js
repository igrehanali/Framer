import { Archivo } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI SaaS Platform",
  description: "Revolutionizing businesses with AI-powered solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
