import './globals.css';
import { ThemeProvider } from 'next-themes';
import { geistMono } from '@/assets/fonts';
import { PackageManagerProvider } from '@/context/package-manager-context';
import { Inter } from 'next/font/google';
import { ResourcePreloader } from '@/components/performance/resource-preloader';
import '@/components/performance/critical.css';
import { MetaTags } from '@/components/seo/meta-tags';
import { metadata } from '@/lib/metadata';
import { OrganizationJsonLd, WebSiteJsonLd, SoftwareApplicationJsonLd } from '@/components/seo/json-ld';
import ClientShell from '@/components/performance/client-shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export { metadata };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <MetaTags />
        <ResourcePreloader images={[]} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <PackageManagerProvider>
            {children}
            <ClientShell />
          </PackageManagerProvider>
        </ThemeProvider>


        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SoftwareApplicationJsonLd />
      </body>
    </html>
  );
}
