/*
 * TODO:
 * - Take into consideration data types for base color parameter
 * - Include additional options for:
 * - - Defining the output color space and format
 * - Include error handling
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
	o = options.outputType || "hex";
	f = options.outputFormat || "string";

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
	} else if (Array.isArray(base) && i !== null) {
		if (i === "rgb") {
			hsl = rgbToHsl(base);
		}
		if (i === "hsl") {
			hsl = base;
		}
	}

	hsl[1] = s;
	hsl[2] = l;

	newRgb = hslToRgb(hsl);

	if (f === "string") {
		if (o === "rgb") output = "rgb(" + newRgb[0] + ", " + newRgb[1] + ", " + newRgb[2] + ")";
		if (o === "hsl") output = "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
		if (o === "hex") output = rgbToHex(newRgb).toUpperCase();
	} else if (f === "array") {
		if (o === "rgb") output = newRgb;
		if (o === "hsl") output = hsl;
	}

	return output;
};

export default generateVariant;
