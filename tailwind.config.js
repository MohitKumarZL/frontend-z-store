import { ssrModuleExportsKey } from "vite/module-runner";

{
  import("tailwindcss").createRequire(import.meta.url)("./tailwind.config.js");
}

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#748C70",
        secondary: "#5A6D57",
      },
      containter: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      screens: {
        'xs': '480px',        // extra small
        'sm': '640px',        // small (default)
        'md': '768px',        // medium (default)
        'lg': '1024px',       // large (default)
        'xl': '1280px',       // extra large (default)
        '2xl': '1536px',      // 2x extra large (default)
        'tv': '1800px',       // your custom breakpoint
      },
    },
  },
  plugins: [],
};
