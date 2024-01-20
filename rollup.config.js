import info from "./package.json";
import cleanup from "rollup-plugin-cleanup";

let banner = `/*\n* - ${info.name} v${info.version}\n* - ${info.description}\n*\n* - Copyright ${
	info.author
} ${new Date().getFullYear()}\n* - ${info.license} license\n */`;

let formats = ["es", "umd"];

export default {
	input: "src/color.js",
	plugins: [cleanup("none")],
	output: formats.map((format) => {
		return {
			file: `dist/color.${format}.js`,
			format: format,
			name: "Color",
			banner: banner,
			exports: "auto",
			compact: true,
		};
	}),
};
