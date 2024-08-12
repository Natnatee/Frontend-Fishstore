import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx}", // รวมไฟล์ในโฟลเดอร์ pages
    // "./components/**/*.{js,ts,jsx,tsx}", // รวมไฟล์ในโฟลเดอร์ components
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': '1920px',  // Custom breakpoint for larger screens
        '4xl': '2560px',  // Another custom breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
