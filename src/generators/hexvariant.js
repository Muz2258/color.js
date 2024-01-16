"use strict";

import { rgbToHsl, hexToRgb, hslToRgb, rgbToHex } from "../converters";

const generateHexVariant = function (color, options) {
	let variant, rgb, hsl;

	if (color.includes("rgb")) {
		rgb = color
			.split("(")[1]
			.split(")")[0]
			.split(", ")
			.map((n) => parseInt(n));
		hsl = rgbToHsl(rgb);
	}
	if (color.includes("hsl")) {
		hsl = color
			.split("(")[1]
			.split(")")[0]
			.split(", ")
			.map((c, i) => (i === 0 ? c / 360 : c.slice(0, 1) / 100));
	}
	if (color.includes("#")) {
		rgb = hexToRgb(color);
		hsl = rgbToHsl(rgb);
	}

	hsl[1] = options.saturation;
	hsl[2] = options.lightness;
	const newRgb = hslToRgb(hsl);
	variant = rgbToHex(newRgb);

	return variant;
};

export default generateHexVariant;
