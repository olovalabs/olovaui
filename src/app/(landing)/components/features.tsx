import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Zap,
  Blocks,
  Smartphone,
  Shield,
  Code2,
  Sparkles,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Pre-built Components",
    description:
      "Copy and paste beautiful, responsive components directly into your project.",
    badge: "50+ Components",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for performance with zero dependencies and minimal bundle size.",
    badge: "0 Dependencies",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/30",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Built with Tailwind CSS and CSS variables for easy theming and customization.",
    badge: "Theme Ready",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/30",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Every component is designed to work perfectly on all screen sizes.",
    badge: "Responsive",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/30",
  },
  {
    icon: Shield,
    title: "TypeScript Support",
    description:
      "Built with TypeScript for better development experience and type safety.",
    badge: "Type Safe",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Clean, readable code with comprehensive documentation and examples.",
    badge: "Well Documented",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <Card className={`group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.border}`}>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-primary/5" />

    <CardHeader className="pb-4 relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <feature.icon className={`w-6 h-6 ${feature.color}`} aria-hidden="true" />
        </div>
        <Badge
          variant="outline"
          className={`text-xs font-medium border-border/50 bg-background/50 backdrop-blur-sm ${feature.color} ${feature.border}`}
        >
          {feature.badge}
        </Badge>
      </div>
      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
        {feature.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <CardDescription className="text-base leading-relaxed text-muted-foreground">
        {feature.description}
      </CardDescription>
    </CardContent>
  </Card>
);

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="features-heading">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>

          <h2
            id="features-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
          >
            Everything you need to build
            <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mt-2">
              amazing interfaces
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Olova UI provides all the tools and components you need to create
            stunning, modern web applications with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/50">
            <Rocket className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>And many more features coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};
