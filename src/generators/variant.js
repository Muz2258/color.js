/*
 * TODO:
 * - Take into consideration data types for base color parameter
 * - Include additional options for:
 * - - Defining the output color space and format
 */

"use strict";

import { rgbToHsl, hexToRgb, hslToRgb, rgbToHex } from "../converters";

/**
 * Description: A function that generates color variants based on a specified color
 * @param {String, Array} base The base color
 * @param {Object} options An object of characteristics for the color variant
 * @returns
 */
const generateVariant = function (base, options) {
	let variant, rgb, hsl, newRgb;

	if (base.includes("rgb")) {
		rgb = base
			.split("(")[1]
			.split(")")[0]
			.split(", ")
			.map((n) => parseInt(n));
		hsl = rgbToHsl(rgb);
	}
	if (base.includes("hsl")) {
		hsl = base
			.split("(")[1]
			.split(")")[0]
			.split(", ")
			.map((c, i) => (i === 0 ? c / 360 : c.slice(0, 1) / 100));
	}
	if (base.includes("#")) {
		rgb = hexToRgb(base);
		hsl = rgbToHsl(rgb);
	}

	hsl[1] = options.saturation;
	hsl[2] = options.lightness;

	newRgb = hslToRgb(hsl);
	variant = rgbToHex(newRgb);

	return variant;
};

export default generateVariant;
