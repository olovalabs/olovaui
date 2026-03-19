import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { PackageManagerProvider } from "@/context/package-manager-context";
import "@/app/globals.css";

const geistSans = Geist({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olova UI - Standalone Component Viewer",
  description: "View Olova UI components in standalone mode",
};

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} ${geistSans.variable} antialiased min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-normal`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <PackageManagerProvider>{children}</PackageManagerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
