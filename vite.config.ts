import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Metal-Trading-Website/", // ✅ add leading and trailing slashes
});
