import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js', // ระบุไฟล์ของ Preline UI
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': '1920px',  // Custom breakpoint for larger screens
        '4xl': '2560px',  // Another custom breakpoint
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // เพิ่ม Forms Plugin ตรงนี้
    require('preline/plugin'), // เพิ่ม Preline UI Plugin
  ],
};

export default config;
