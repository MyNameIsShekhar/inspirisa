import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern":
          "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('/pattern.svg')",
      },
      listStyleImage: {
        "custom-arrow": "url('/list_arrow.svg')", // Path to your SVG
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        pinyon: ['"Pinyon Script"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        "display-1": ["80px", { lineHeight: "1.1" }],
        "display-2": ["72px", { lineHeight: "1.1" }],
        "display-3": ["64px", { lineHeight: "1.2" }],
        "display-4": ["56px", { lineHeight: "1.2" }],
        "display-5": ["48px", { lineHeight: "1.3" }],
        "heading-1": ["40px", { lineHeight: "1.3" }],
        "heading-2": ["32px", { lineHeight: "1.4" }],
        "heading-3": ["28px", { lineHeight: "1.4" }],
        "heading-4": ["24px", { lineHeight: "1.5" }],
        "heading-5": ["20px", { lineHeight: "1.5" }],
        "body-1": ["16px", { lineHeight: "1.6" }],
        "body-2": ["14px", { lineHeight: "1.6" }],
        button: ["14px", { lineHeight: "1.5" }],
      },
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
          dark: "hsl(var(--primary-dark))",
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
    },
  },
  plugins: [tailwindcssAnimate],
};
