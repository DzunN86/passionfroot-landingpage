/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        heading: ['"New Kansas"', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url(https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6702a0d720af693311a470d6_Subtract.png),linear-gradient(#f5f3ea00 40%,#f5f3ea 89%)",
        'footer-texture': "url('/img/footer-texture.png')",
        'black-gradient': "linear-gradient(180deg, #3B3D3D 0%, #191A1A 100%)",
        'link-gradient': "linear-gradient(90deg,#ffc7a1 38%,#fca061)",
        'cta-gradient': "linear-gradient(180deg, #FFA466 0%, #FF9147 100%)",
        'primary-gradient': "linear-gradient(180deg, #3B3D3D 0%, #191A1A 100%)",
        'secondary-gradient': "linear-gradient(180deg, #FBFBF8 0%, #F7F5EE 100%)",
        'purple-gradient': "linear-gradient(180deg, #C287F7 0%, #B26BF5 100%)",
      },
      boxShadow:{
        button: "0 2px 2px -1px #191a1a08,0 4px 4px -2px #191a1a05,0 16px 16px -8px #191a1a05,inset 0 0 0 1px #191a1a1a",
        "secondary-button": "0px 16px 16px -8px rgba(25, 26, 26, 0.02), 0px 8px 8px -4px rgba(25, 26, 26, 0.02), 0px 4px 4px -2px rgba(25, 26, 26, 0.02), 0px 2px 2px -1px rgba(25, 26, 26, 0.03), 0px 1px 1px -0.5px rgba(25, 26, 26, 0.03), 0px 0px 0px 1.25px rgba(25, 26, 26, 0.10)",
        menu: "0 16px 16px -8px #191a1a05,0 8px 8px -4px #191a1a05,0 4px 4px -2px #191a1a05,0 2px 2px -1px #191a1a08,0 1px 1px -.5px #191a1a08,0 0 0 1px #191a1a08"
      },
      transitionTimingFunction:{
        'in-out-quint': 'cubic-bezier(0.77,0,0.175,1)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
