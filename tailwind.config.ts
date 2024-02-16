import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h0: [
          "32px",
          {
            lineHeight: "41.6px",
            letterSpacing: "-0.64px",
            fontWeight: 600,
          },
        ],
        h1: [
          "28px",
          {
            lineHeight: "33.6px",
            letterSpacing: "-0.56px",
            fontWeight: 600,
          },
        ],
        h2: [
          "24px",
          {
            lineHeight: "31.2px",
            letterSpacing: "-0.48px",
            fontWeight: 600,
          },
        ],
        "h3-semibold": [
          "21px",
          {
            lineHeight: "27.3px",
            letterSpacing: "-0.42px",
            fontWeight: 600,
          },
        ],
        h3: [
          "21px",
          {
            lineHeight: "25.2px",
            letterSpacing: "-0.42px",
            fontWeight: 400,
          },
        ],
        h4: [
          "18px",
          {
            lineHeight: "23.4px",
            letterSpacing: "-0.36px",
            fontWeight: 600,
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "20.8px",
            letterSpacing: "-0.32px",
            fontWeight: 600,
          },
        ],
        h6: [
          "14px",
          {
            lineHeight: "16.8px",
            letterSpacing: "-0.28px",
            fontWeight: 600,
          },
        ],

        body0: [
          "18px",
          {
            lineHeight: "21.6px",
            letterSpacing: "-0.36px",
            fontWeight: 400,
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: "19.5px",
            letterSpacing: "-0.3px",
            fontWeight: 400,
          },
        ],
        body2: [
          "15px",
          {
            lineHeight: "18.2px",
            letterSpacing: "-0.28px",
            fontWeight: 400,
          },
        ],
        body3: [
          "14px",
          {
            lineHeight: "16.9px",
            letterSpacing: "-0.26px",
            fontWeight: 400,
          },
        ],
        body4: [
          "12px",
          {
            lineHeight: "15.6px",
            letterSpacing: "-0.24px",
            fontWeight: 400,
          },
        ],
        body5: [
          "10px",
          {
            lineHeight: "13px",
            letterSpacing: "-0.2px",
            fontWeight: 400,
          },
        ],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "var(--color-white)",

        "main-50": "var(--color-main-50)",
        "main-100": "var(--color-main-100)",
        "main-200": "var(--color-main-200)",
        "main-300": "var(--color-main-300)",
        "main-400": "var(--color-main-400)",
        "main-500": "var(--color-main-500)",
        "main-600": "var(--color-main-600)",
        "main-700": "var(--color-main-700)",
        "main-800": "var(--color-main-800)",
        "main-900": "var(--color-main-900)",

        "navy-50": "var(--color-navy-50)",
        "navy-100": "var(--color-navy-100)",
        "navy-200": "var(--color-navy-200)",
        "navy-300": "var(--color-navy-300)",
        "navy-400": "var(--color-navy-400)",
        "navy-500": "var(--color-navy-500)",
        "navy-600": "var(--color-navy-600)",
        "navy-700": "var(--color-navy-700)",
        "navy-800": "var(--color-navy-800)",
        "navy-900": "var(--color-navy-900)",

        "purple-50": "var(--color-purple-50)",
        "purple-100": "var(--color-purple-100)",
        "purple-200": "var(--color-purple-200)",
        "purple-300": "var(--color-purple-300)",
        "purple-400": "var(--color-purple-400)",
        "purple-500": "var(--color-purple-500)",
        "purple-600": "var(--color-purple-600)",
        "purple-700": "var(--color-purple-700)",
        "purple-800": "var(--color-purple-800)",
        "purple-900": "var(--color-purple-900)",

        "blue-50": "var(--color-blue-50)",
        "blue-100": "var(--color-blue-100)",
        "blue-200": "var(--color-blue-200)",
        "blue-300": "var(--color-blue-300)",
        "blue-400": "var(--color-blue-400)",
        "blue-500": "var(--color-blue-500)",
        "blue-600": "var(--color-blue-600)",
        "blue-700": "var(--color-blue-700)",
        "blue-800": "var(--color-blue-800)",
        "blue-900": "var(--color-blue-900)",

        "green-50": "var(--color-green-50)",
        "green-100": "var(--color-green-100)",
        "green-200": "var(--color-green-200)",
        "green-300": "var(--color-green-300)",
        "green-400": "var(--color-green-400)",
        "green-500": "var(--color-green-500)",
        "green-600": "var(--color-green-600)",
        "green-700": "var(--color-green-700)",
        "green-800": "var(--color-green-800)",
        "green-900": "var(--color-green-900)",

        "grey-50": "var(--color-grey-50)",
        "grey-100": "var(--color-grey-100)",
        "grey-200": "var(--color-grey-200)",
        "grey-300": "var(--color-grey-300)",
        "grey-400": "var(--color-grey-400)",
        "grey-500": "var(--color-grey-500)",
        "grey-600": "var(--color-grey-600)",
        "grey-700": "var(--color-grey-700)",
        "grey-800": "var(--color-grey-800)",
        "grey-900": "var(--color-grey-900)",

        error: "var(--color-error)",
      },
    },
  },

  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
  ],
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "clsx",
    "cn",
    ".*Styles*", // Add ".*Styles*" (or whatever matches your naming scheme)
  ],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
export default config;
