/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // Light mode
        background: "#f2faf3",
        foreground: "#0f3318",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f3318",
        },
        primary: {
          DEFAULT: "#177a2e",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#d4f3da",
          foreground: "#1a5228",
        },
        muted: {
          DEFAULT: "#e0f5e4",
          foreground: "#4a6e50",
        },
        accent: "#a8ecb8",
        destructive: {
          DEFAULT: "#fff3f0",
          foreground: "#d94020",
        },
        border: "#b8e4c2",
        input: "#b8e4c2",
        ring: "#22c45a",
        success: "#18a83c",
        priority: {
          low: "#c8f2d3",
          "low-foreground": "#1f8c3b",
          medium: "#fff6cc",
          "medium-foreground": "#7a4f08",
          high: "#ffe8e0",
          "high-foreground": "#c43518",
        },

        // Dark mode — add via darkMode config or separate key
        dark: {
          background: "#0c1f11",
          foreground: "#d0edcc",
          card: "#111f14",
          "card-foreground": "#d0edcc",
          primary: "#3de06a",
          "primary-foreground": "#ffffff",
          secondary: "#1e3322",
          "secondary-foreground": "#bcd4c2",
          muted: "#182b1d",
          "muted-foreground": "#8aab8e",
          accent: "#1c3b22",
          destructive: "#2b1410",
          "destructive-foreground": "#f5907a",
          border: "#273d2c",
          input: "#273d2c",
          ring: "#39db6a",
          success: "#2dd65e",
          "priority-low": "#1c3523",
          "priority-low-foreground": "#8ed4a0",
          "priority-medium": "#2e2710",
          "priority-medium-foreground": "#f5d97a",
          "priority-high": "#2e1812",
          "priority-high-foreground": "#f5a090",
        },
      },
    },
  },
  plugins: [],
};
