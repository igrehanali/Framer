// import { Geist, Geist_Mono } from "next/font/google";
import { Archivo } from "next/font/google";

import "./globals.css";

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
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
