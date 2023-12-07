import path from "path";
import { defineConfig } from "vitest/config";
export default defineConfig({
	test: {
		globals: true,
		setupFiles: [path.resolve(__dirname, "./infra/testing/setup.ts")],
	},
	resolve: {
		alias: {
			"@api": path.resolve(__dirname, "./api"),
			"@infra": path.resolve(__dirname, "./infra"),
		},
	},
});
