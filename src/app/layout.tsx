import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/sections/Navbar";
import { Toaster } from "sonner";
import { Providers } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prediksi Kanker",
  description: "Aplikasi untuk memprediksi kemungkinan kanker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Navbar />
            <Toaster />
            <main className="min-h-screen">{children}</main>
          </ThemeProvider>
        </Providers>

        {/* Footer */}
        {/* <footer className="bg-gray-50 py-10 mt-28">
          <div className="container mx-auto text-center px-4 text-gray-500">
            <p>Made with ❤️ by Vakaaa</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
