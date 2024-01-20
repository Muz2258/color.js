/*
 * TODO:
 * - Include error handling
 */

"use strict";

import { default as rgbToHsl } from "../converters/rgbtohsl.js";
import { default as rgbToHex } from "../converters/rgbtohex.js";
import { default as hexToRgb } from "../converters/hextorgb.js";
import { default as hslToRgb } from "../converters/hsltorgb.js";
import { throwStatement } from "@babel/types";

/**
 * Description: A function that generates color variants based on a specified color
 * @param {String, Array} base The base color
 * @param {Object} options An object of characteristics for the color variant
 * @returns A new color in the specified color space and format
 */
const generateVariant = function (base, options) {
	const typeErr = (msg) => new TypeError(msg);
	const syntErr = (msg) => new SyntaxError(msg);
	const genErr = (msg) => new Error(msg);

	let s, l, i, o, f, rgb, newRgb, hsl, output;

	try {
		s = options.saturation;
		l = options.lightness;
		i = options.baseColorSpace || null;
		o = options.variantColorSpace || "hex";
		f = options.variantFormat || "string";

		if (typeof base === "string") {
			if (base.includes("rgb") || base.includes("RGB")) {
				rgb = base
					.split("(")[1]
					.split(")")[0]
					.split(", ")
					.map((n) => parseInt(n));
				hsl = rgbToHsl(rgb);
			}
			if (base.includes("hsl") || base.includes("HSL")) {
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
		} else if (Array.isArray(base)) {
			if (i === null) {
				throw genErr(
					"You must specify the 'baseColorSpace' property when using array as the base color. 'inputType' property can be set to either 'rgb' or 'hsl'"
				);
			} else {
				if (i === "rgb") {
					hsl = rgbToHsl(base);
				}
				if (i === "hsl") {
					hsl = base;
				}
			}
		} else {
			throw typeErr(
				`You can only use either one of the following as the first argument\n\t   - RGB String: "RGB(r, g, b)"\n\t   - RGB Array: [r, g, b]\n\t   - HSL String: "HSL(h, s%, l%)" or "HSL(h, s, l)"\n\t   - HSL Array: [h, s, l]
				`
			);
		}

		if (!s)
			throw genErr(
				"You must set the value of the 'Saturation' property in the object passed as the second argument"
			);
		else hsl[1] = s;

		if (!l)
			throw genErr(
				"You must set the value of the 'Lightness' property in the object passed as the second argument"
			);
		else hsl[2] = l;

		newRgb = hslToRgb(hsl);

		if (f === "array" && o === "hex") {
			throw syntErr(
				"You shouldn't set the 'variantFormat' property to 'array' while the 'variantColorSpace' property is not set (the default value is 'hex' and hex values are only outputted as strings)"
			);
		} else if (f === "array") {
			if (o === "rgb") output = newRgb;
			if (o === "hsl") output = hsl;
		} else if (f === "string") {
			if (o === "rgb")
				output = "RGB(" + newRgb[0] + ", " + newRgb[1] + ", " + newRgb[2] + ")";
			if (o === "hsl") output = "HSL(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
			if (o === "hex") output = rgbToHex(newRgb).toUpperCase();
		}

		return output;
	} catch (err) {
		console.error(err);
	}
};

export default generateVariant;
