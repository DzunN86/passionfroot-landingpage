import { NavHeaderOrangeImg, NavHeaderPurpleImg } from "@/assets";
import { NavMenuType } from "@/types";

export const footerMenu = [
  {
    section: "Resources",
    links: [
      {
        name: "Blog",
        url: "#blog",
        isNew: false,
      },
      {
        name: "Podcasts",
        url: "#podcasts",
        isNew: false,
      },
      {
        name: "Guides",
        url: "#guides",
        isNew: true,
      },
      {
        name: "Help Center",
        url: "#help-center",
        isNew: false,
      },
    ],
  },
  {
    section: "Company",
    links: [
      {
        name: "Product",
        url: "#product",
        isNew: false,
      },
      {
        name: "About",
        url: "#about",
        isNew: false,
      },
      {
        name: "Careers",
        url: "#careers",
        isNew: true,
      },
      {
        name: "Wall of Love",
        url: "#wall-of-love",
        isNew: false,
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "Twitter",
    url: "#",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "#",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: "#",
    icon: "youtube",
  },
];

export const navigationMenu: NavMenuType[] = [
  {
    label: "For Brands",
    image: NavHeaderOrangeImg,
    subMenu: [
      {
        section: undefined,
        links: [
          {
            name: "Features",
            url: "#",
            icon: "features",
            description: "Find the right creators on all platforms, book & collaborate, pay quickly & safely - all in one place.",
          },
          {
            name: "Customers",
            url: "#",
            icon: "customers",
            description: "Discover how forward-thinking companies use Passionfroot to reach their growth goals.",
          },
          {
            name: "Pricing",
            url: "#",
            icon: "pricing",
            description: "Designed for every stage of your journey. Start today for free.",
          },
        ],
      },
      {
        section: "Resources",
        links: [
          {
            name: "Blog",
            url: "#",
            icon: "blog",
            description: "",
          },
          {
            name: "Influencer Pricing Guide",
            url: "#",
            icon: "note",
            description: "",
          },
        ],
      },
    ],
  },
  {
    label: "For Creators",
    image: NavHeaderPurpleImg,
    subMenu: [
      {
        section: undefined,
        links: [
          {
            name: "Features",
            url: "#",
            icon: "features",
            description: "Explore the all-in-one tool to help creators do more brand deals - easier, and faster.",
          },
          {
            name: "Customers",
            url: "#",
            icon: "customers",
            description: "Learn how other creators are leveraging Passionfroot to monetize their content with brand partnerships.",
          },
          {
            name: "Pricing",
            url: "#",
            icon: "pricing",
            description: "Designed for every stage of your journey. Start today for free.",
          },
        ],
      },
      {
        section: "Resources",
        links: [
          {
            name: "Creator Gallery",
            url: "#",
            icon: "gallery",
            description: "",
          },
          {
            name: "Blog",
            url: "#",
            icon: "blog",
            description: "",
          },
          {
            name: "Podcasts",
            url: "#",
            icon: "podcasts",
            description: "",
          },
          {
            name: "Sponsorship Pricing Guide",
            url: "#",
            icon: "note",
            description: "",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    image: undefined,
    subMenu: [
      {
        section: undefined,
        links: [
          {
            name: "Creator Pricing",
            url: "#",
            icon: "features",
            description: "Join to find great creators, collaborate on unique campaigns, and grow your brand.",
          },
          {
            name: "Brand Pricing",
            url: "#",
            icon: "customers",
            description: "Designed for every stage of your journey. Start today for free.",
          },
        ],
      },
    ],
  },
];

export const loginMenu = {
  label: "Login",
  subMenu: [
    {
      section: "Login As A",
      links: [
        {
          name: "Creator",
          url: "#",
          icon: "blog",
        },
        {
          name: "Brand",
          url: "#",
          icon: "podcasts",
        },
      ],
    },
  ],
};
