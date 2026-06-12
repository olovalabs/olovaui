import Link from "next/link";

const footerLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Changelog", href: "/changelog" },
  { label: "Sponsor", href: "/sponsor" },
  { label: "GitHub", href: "https://github.com/olovalabs/olovaui" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Olova UI</p>
          <p className="mt-1 text-sm text-muted-foreground">
            MIT licensed. Built by Nazmul Hossain.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
