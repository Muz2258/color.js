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
	let s, l, i, o, f, rgb, newRgb, output, hsl;

	s = options.saturation || 100;
	l = options.lightness || 50;
	i = options.inputType || null;
	o = options.outputType || null;
	f = options.outputFormat || "hex";

	if (typeof base === "string") {
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
				.map((c, i) => (i === 0 ? c : c.split("%")[0]));
		}
		if (base.includes("#")) {
			rgb = hexToRgb(base);
			hsl = rgbToHsl(rgb);
		}
	} else {
		console.log(typeof base);
	}

	hsl[1] = s;
	hsl[2] = l;

	newRgb = hslToRgb(hsl);
	output = rgbToHex(newRgb);

	return output;
};

export default generateVariant;
