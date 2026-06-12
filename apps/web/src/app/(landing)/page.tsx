import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import { Hero } from "./components/hero";
import { TrustedBy } from "./components/trusted-by";

// Dynamic imports for components below the fold to reduce initial TBT
const ComponentPlayground = dynamic(
  () => import("./components/component-playground").then((mod) => mod.ComponentPlayground),
  { loading: () => <div className="h-[400px] animate-pulse bg-muted/20" /> }
);

const ComponentShowcase = dynamic(
  () => import("./components/component-showcase").then((mod) => mod.ComponentShowcase),
  { loading: () => <div className="h-[600px] animate-pulse bg-muted/20" /> }
);

const CodeExample = dynamic(
  () => import("./components/code-example").then((mod) => mod.CodeExample),
  { loading: () => <div className="h-[400px] animate-pulse bg-muted/20" /> }
);

const Installation = dynamic(
  () => import("./components/installation").then((mod) => mod.Installation),
  { loading: () => <div className="h-[400px] animate-pulse bg-muted/20" /> }
);

const FinalCTA = dynamic(
  () => import("./components/final-cta").then((mod) => mod.FinalCTA),
  { loading: () => <div className="h-[200px] animate-pulse bg-muted/20" /> }
);

const Footer = dynamic(() =>
  import("./components/footer").then((mod) => mod.Footer)
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="overflow-hidden">
        {/* Above-the-fold: SSR'd for optimal LCP */}
        <Hero />
        <TrustedBy />
        {/* Below-the-fold: client-only, deferred for TBT reduction */}
        <ComponentPlayground />
        <ComponentShowcase />
        <CodeExample />
        <Installation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
