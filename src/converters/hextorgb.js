"use strict";

/*
 * TODO:
 * Allow option to select output format - String or array
 */

/**
 * Converts the HEX value of a color to its RGB equivalent
 * @param {String} hex The hexadecimal value of a color in RGB color space
 * @returns The RGB value of same color
 */
const convertHexToRgb = function (hex) {
	const noHash = hex.slice(1);

	const r = parseInt(noHash.slice(0, 2), 16);
	const g = parseInt(noHash.slice(2, 4), 16);
	const b = parseInt(noHash.slice(4), 16);

	return [r, g, b];
};

export default convertHexToRgb;
