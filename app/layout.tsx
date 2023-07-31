import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/Footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dotweather",
  description: "Get weather forecast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
