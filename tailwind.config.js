/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#3c414a",
          "200": "#374151",
          "300": "#263243",
        },
        white: "#fff",
        silver: {
          "100": "#c4c5c9",
          "200": "#c9c3c3",
          "300": "rgba(201, 195, 195, 0.5)",
        },
        black: "#000",
        gray: {
          "100": "#1f2937",
          "200": "#111827",
        },
        lavender: "#e2e3fd",
        blueviolet: {
          "100": "#4f46e5",
          "200": "rgba(79, 70, 229, 0.5)",
        },
        darkblue: "#221aa9",
        darkgray: "#979aa0",
        gainsboro: "#e6e7e9",
        cornflowerblue: "#5290e7",
        mediumseagreen: "#31c48d",
        gold: "#faca15",
        indianred: "#d76764",
      },
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "13px",
      xl: "20px",
      "6xl": "25px",
      "77xl": "96px",
      "5xl": "24px",
      lg: "18px",
      mini: "15px",
      "27xl": "46px",
      xs: "12px",
      "3xs": "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
