import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Vercel deployment via Nitro. Vercel auto-detects TanStack Start
// (framework preset: "TanStack Start" or "Other"). No additional config needed
// in the Vercel dashboard beyond environment variables.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
});
