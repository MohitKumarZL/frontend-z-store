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
    },
  },
  plugins: [],
};
