"use client";

import { ThemeProvider } from "next-themes";
import { PackageManagerProvider } from "@/context/package-manager-context";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <PackageManagerProvider>{children}</PackageManagerProvider>
    </ThemeProvider>
  );
}
