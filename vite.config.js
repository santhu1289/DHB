import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: './',  // 👈 ADD THIS LINE to fix images!
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Local API proxy is fine
    },
  },
});