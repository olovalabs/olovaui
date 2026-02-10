import { DocsLayoutContent } from "@/components/layout/docs-layout-content";
import { componentsNavigation } from "@/constants/components-navigation";
import { TOCProvider } from "@/context/table-of-contents-context";
import { ReactNode } from "react";

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <TOCProvider>
      <DocsLayoutContent items={componentsNavigation} showPagination={false}>
        {children}
      </DocsLayoutContent>
    </TOCProvider>
  );
}
