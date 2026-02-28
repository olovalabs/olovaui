export type NavigationChild = {
  label: string;
  href: string;
  badge?: string;
};
export type NavigationItem = {
  label: string;
  children: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Getting Started",
    children: [
      { label: "Introduction", href: "/docs" },
      {
        label: "Installation",
        href: "/docs/installation",
        badge: "Updated",
      },
    ],
  },
  {
    label: "Text Animation",
    children: [
      {
        label: "Flip Link",
        href: "/docs/text/flip-link",
        badge: "New",
      },
      {
        label: "Slide In View",
        href: "/docs/text/slide-in-text",
      },
      {
        label: "Blur Text View",
        href: "/docs/text/blur-text",
      },
      {
        label: "Rolling Letters",
        href: "/docs/text/rolling-letters",
        badge: "New",
      },
    ],
  },
  {
    label: "Slider",
    children: [
      {
        label: "3D Carousel",
        href: "/docs/slider/3d-carousel",
        badge: "New",
      },
      {
        label: "Rotating Cards",
        href: "/docs/slider/rotating-cards",
        badge: "New",
      },
      {
        label: "Memories Card",
        href: "/docs/slider/memories-card",
      },
      {
        label: "Photo Slider",
        href: "/docs/slider/photo-slider",
      },
      {
        label: "Focus Cards",
        href: "/docs/slider/focus-cards",
        badge: "New",
      },
    ],
  },
  {
    label: "Code Block",
    children: [
      {
        label: "Code Block Simple",
        href: "/docs/code-block/code-block-simple",
        badge: "New",
      },
      {
        label: "Code Block Natural",
        href: "/docs/code-block/code-block-natural",
      },
      {
        label: "Code Block Select",
        href: "/docs/code-block/code-block-select",
        badge: "New",
      },
    ],
  },
  {
    label: "Effects",
    children: [
      {
        label: "Border Beam",
        href: "/docs/border-beam",
        badge: "New",
      },
      {
        label: "Shine Border",
        href: "/docs/shine-border",
        badge: "New",
      },
    ],
  },
];
