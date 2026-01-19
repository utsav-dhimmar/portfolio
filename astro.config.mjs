import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Spline Sans Mono",
        cssVariable: "--font-spline-sans-mono",
      },
    ],
  },
});
