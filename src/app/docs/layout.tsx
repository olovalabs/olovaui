import { DocsLayoutContent } from "@/components/layout/docs-layout-content";
import { TOCProvider } from "@/context/table-of-contents-context";
import { ReactNode } from "react";


// Force static generation for all docs pages

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <TOCProvider>
    <DocsLayoutContent>{children}</DocsLayoutContent>
    </TOCProvider>
  );
}
