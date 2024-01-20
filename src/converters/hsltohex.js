"use strict";

import { default as hslToRgb } from "./hsltorgb.js";
import { default as rgbToHex } from "./rgbtohex.js";

/*
 * TODO:
 * Allow both string and array as acceptable parameters
 */

/**
 * Converts a color in HSL color space to RGB color space in HEX value format
 * @param {Array, String} arr The HSL value of a color in HSL color space
 * @returns The HEX value of same color in RGB color space
 */
const convertHslToHex = function (arr) {
	const rgb = hslToRgb(arr);
	const hex = rgbToHex(rgb);

	return hex;
};

export default convertHslToHex;
