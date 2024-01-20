"use strict";

import { default as hexToRgb } from "./hextorgb.js";
import { default as rgbToHsl } from "./rgbtohsl.js";

/**
 * A function that converts a color value from HEX to HSL
 * @param {string} hex The hexadecimal value of a color in the RGB color space
 * @returns The same color in the HSL color space
 */
const convertHextoHsl = function (hex) {
	const rgb = hexToRgb(hex);
	const hsl = rgbToHsl(rgb);

	return hsl;
};

export default convertHextoHsl;
