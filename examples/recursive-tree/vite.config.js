import { defineConfig } from "vite";
import elmPlugin from "vite-plugin-elm";

export default defineConfig({
  plugins: [elmPlugin({ debug: false, optimize: true })],
  base: "/elm-3d-playground-exploration/",
});
