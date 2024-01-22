"use strict";

import { default as hexToRgb } from "./hextorgb.js";
import { default as rgbToHsl } from "./rgbtohsl.js";

/**
 * A function that converts a color value from HEX to HSL
 * @param {string} val The hexadecimal value of a color in the RGB color space
 * @param {String} f The output format - string or array
 * @returns The same color in the HSL color space
 */
const convertHextoHsl = function (val, f = "array") {
	const rgb = hexToRgb(val);
	const hsl = rgbToHsl(rgb, f);

	return hsl;
};

export default convertHextoHsl;
