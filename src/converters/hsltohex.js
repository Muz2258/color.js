"use strict";

import { default as hslToRgb } from "./hsltorgb.js";
import { default as rgbToHex } from "./rgbtohex.js";

/**
 * Converts a color in HSL color space to RGB color space in HEX value format
 * @param {Array, String} val The HSL value of a color in HSL color space
 * @returns The HEX value of same color in RGB color space
 */
const convertHslToHex = function (val) {
	const rgb = hslToRgb(val);
	const hex = rgbToHex(rgb);

	return hex;
};

export default convertHslToHex;
