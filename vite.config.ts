import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@style", replacement: "/src/style" },
      { find: "@util", replacement: "/src/util" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
