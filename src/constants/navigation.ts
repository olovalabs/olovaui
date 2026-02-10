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
