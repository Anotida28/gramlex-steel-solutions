import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
          lighter: "hsl(var(--navy-lighter))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
          light: "hsl(var(--gold-light))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        steel: {
          50: "hsl(var(--steel-50))",
          100: "hsl(var(--steel-100))",
          200: "hsl(var(--steel-200))",
          300: "hsl(var(--steel-300))",
          400: "hsl(var(--steel-400))",
          500: "hsl(var(--steel-500))",
          600: "hsl(var(--steel-600))",
          700: "hsl(var(--steel-700))",
          800: "hsl(var(--steel-800))",
          900: "hsl(var(--steel-900))",
          light: "hsl(var(--steel-100))",
          medium: "hsl(var(--steel-500))",
          dark: "hsl(var(--steel-900))",
        },
        construction: {
          orange: "hsl(var(--construction-orange))",
        },
        industrial: {
          blue: "hsl(var(--industrial-blue))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        sans: [
          "Source Sans 3",
          "Helvetica Neue",
          "Arial",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
        ],
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-steel": "var(--gradient-steel)",
        "gradient-hero": "var(--gradient-hero)",
      },
      boxShadow: {
        industrial: "var(--shadow-industrial)",
        card: "var(--shadow-card)",
        primary: "var(--shadow-primary)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        steel: "var(--transition-steel)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
