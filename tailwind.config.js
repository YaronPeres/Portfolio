/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      textColor: ["responsive", "hover", "focus", "active"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FAFF",
          100: "#E0F5FE",
          200: "#BAE8FD",
          300: "#7CD3FC" /* more text variation for span in dark mode*/,
          400: "#38BDF8" /* hover nav text + selected */,
          500: "#0EA6E9",
          600: "#028AC7",
          700: "#0370A1",
          800: "#0C506E",
          900: "#1e3a8a",
          950: "#10172A" /* text white theme  */,
        },
        secondary: {
          50: "#F7FAFC",
          100: "#f1f5f9",
          200: "#e2e8f0" /* text h1 dark */,
          300: "#cbd5e1" /*dark icon hover */,
          400: "#94A3B8" /* text span + icon dark */,
          500: "#64748b" /*icon text dark */,
          600: "#475569",
          700: "#293748" /*dark component bg hover + white theme <p> text*/,
          800: "#1e293b" /*dark component bg */,
          900: "#0B1120" /*dark bg */,
        },

        custom: {
          background: "var(--background)",
        },
      },
    },
  },
  plugins: [],
};
