import { resolve } from "path";

export default {
	build: {
		rollupOptions: {
			input: {
				style: resolve(__dirname, "src/styles/tailwind.css"),
				// script: resolve(__dirname, "src/main.js"),
			},
			output: {
				dir: "assets",
				assetFileNames: "app.css",
				// entryFileNames: "app.js",
			},
		},
		emptyOutDir: false,
	},
};
