/*
 * File: app/layout.tsx
 * Author: Ahamid Adam
 * Date: October 29, 2026
 * This file defines the shared layout of the application.
 * It receives the current page through the children prop.
 * It imports the stylesheet and the shared navigation and footer components.
 * The layout places Navbar above the page and Footer below it.
 * It returns the root HTML structure for the application.
 */

import type { ReactNode } from "react";
import Navbar from "@/Componets/Navbar";
import Footer from "@/Componets/Footer";
import "./globals.css";

// Describe the page content received from Next.js.
interface RootLayoutProps {
  children: ReactNode;
}

// Arrange the shared header, page content, and footer.
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;