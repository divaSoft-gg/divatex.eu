// vite.config.ts
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

// @see https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    env({
      prefix: "VITE_", // Optional: custom prefix (default is 'VITE_')
    }),
  ],
});
