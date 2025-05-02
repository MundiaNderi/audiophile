import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Binds to all network interfaces (necessary for Render)
    port: 4173, // Ensure this is an available port
  },
  preview: {
    port: 4173, // Same as above for consistency
  },
});
