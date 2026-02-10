import { DocsLayoutContent } from "@/components/layout/docs-layout-content";
import { TOCProvider } from "@/context/table-of-contents-context";
import { ReactNode } from "react";

export default function UsageLayout({ children }: { children: ReactNode }) {
  return (
    <TOCProvider>
      <DocsLayoutContent>{children}</DocsLayoutContent>
    </TOCProvider>
  );
}
