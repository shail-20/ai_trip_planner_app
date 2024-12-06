import path from "path"; // Import path module
import { fileURLToPath } from "url";
import { dirname } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Define __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
