import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    avatar: "/api/placeholder/40/40",
    content:
      "Olova UI has completely transformed how I build interfaces. The components are beautiful, well-documented, and incredibly easy to customize.",
    rating: 5,
    featured: true,
  },
  {
    name: "Sarah Williams",
    role: "Product Designer",
    company: "StartupXYZ",
    avatar: "/api/placeholder/40/40",
    content:
      "The attention to detail in these components is outstanding. They look great out of the box and integrate seamlessly with our design system.",
    rating: 5,
    featured: false,
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Engineer",
    company: "WebFlow Inc",
    avatar: "/api/placeholder/40/40",
    content:
      "I've tried many UI libraries, but Olova UI stands out with its perfect balance of simplicity and functionality. Highly recommended!",
    rating: 5,
    featured: true,
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer",
    company: "DesignStudio",
    avatar: "/api/placeholder/40/40",
    content:
      "The components are not only beautiful but also accessible. It's rare to find a library that cares so much about both aesthetics and usability.",
    rating: 5,
    featured: false,
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "InnovateTech",
    avatar: "/api/placeholder/40/40",
    content:
      "Olova UI saved us weeks of development time. The TypeScript support and documentation are top-notch. Our team loves working with it.",
    rating: 5,
    featured: true,
  },
  {
    name: "Lisa Anderson",
    role: "Creative Director",
    company: "BrandCraft",
    avatar: "/api/placeholder/40/40",
    content:
      "Finally, a component library that doesn't compromise on design quality. Every component feels crafted with care and attention to detail.",
    rating: 5,
    featured: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-muted/30"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <div className="h-full">
    <Card
      className={`group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 ${
        testimonial.featured
          ? "bg-gradient-to-br from-primary/5 via-card to-card border-primary/20"
          : "bg-card/50 backdrop-blur-sm hover:bg-card/80"
      }`}
    >
      {testimonial.featured && (
        <>
            <BorderBeam
              size={60}
              duration={15 + index * 2}
              delay={index * 3}
              colorFrom="rgb(59, 130, 246)"
              colorTo="rgb(147, 51, 234)"
              className="opacity-40 group-hover:opacity-80 transition-opacity duration-500"
            />
          <div className="absolute top-0 right-0 p-3">
            <Badge
              variant="secondary"
              className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border-primary/20"
            >
              Featured
            </Badge>
          </div>
        </>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-full opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
            <Avatar className="w-12 h-12 border-2 border-background relative z-10">
              <AvatarImage
                src={testimonial.avatar}
                alt={`${testimonial.name}'s profile picture`}
                loading="lazy"
              />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200">
              {testimonial.name}
            </h4>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <StarRating rating={testimonial.rating} />
        </div>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/10 rotate-180" />
          <CardDescription className="text-sm leading-relaxed text-foreground/80 pl-2 relative z-10">
            {testimonial.content}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">
              Testimonials
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Loved by developers
            <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mt-2">
              around the world
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what developers and designers are saying about their experience
            with Olova UI components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-1 pr-6 bg-card border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Avatar
                  key={index}
                  className="w-10 h-10 border-2 border-background ring-2 ring-background"
                >
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    loading="lazy"
                  />
                  <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
                    {testimonial.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
              ))}
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-background flex items-center justify-center ring-2 ring-background">
                <span className="text-[10px] font-bold">
                  +1k
                </span>
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <StarRating rating={5} />
                <span className="text-sm font-bold">5.0</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Trusted by 1000+ developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
