import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
// import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Using Google Fonts (Playfair Display, Poppins, Space Grotesk) loaded via globals.css

export const metadata: Metadata = {
  title: "Professional Resume",
  description: "Modern resume with interactive dotted surface theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background text-foreground"
        )}
      >
        <Providers>
          {/* <DottedSurface /> */}
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
