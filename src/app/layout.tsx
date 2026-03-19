import './globals.css';
import { ThemeProvider } from 'next-themes';
import { geistMono, geistSans } from '@/assets/fonts';
import { PackageManagerProvider } from '@/context/package-manager-context';
import { ResourcePreloader } from '@/components/performance/resource-preloader';
import '@/components/performance/critical.css';
import { MetaTags } from '@/components/seo/meta-tags';
import { metadata } from '@/lib/metadata';
import { OrganizationJsonLd, WebSiteJsonLd, SoftwareApplicationJsonLd } from '@/components/seo/json-ld';
import ClientShell from '@/components/performance/client-shell';

export { metadata };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <MetaTags />
        <meta name="google-site-verification" content="A4XbFNsC1916zjxsmhpEfyc1VYQsV33iFDki7EcCA4o" />
        <ResourcePreloader />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${geistSans.variable} antialiased min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-normal`}
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
