import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "복약 알림 PWA",
        short_name: "복약알림",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#10b981",
        icons: [
          {AAAAAAAAAAAAAAAAAAAAAA
            src: "/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
