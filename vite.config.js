import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { patchCssModules } from "vite-css-modules";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), patchCssModules()],
	css: {
		modules: true,
	},
	build: {
		// Recommended minimum target (See FAQ for more details)
		target: "es2022",
	},
	base: "/qr-code",
});
