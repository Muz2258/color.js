"use strict";

/*
 * TODO:
 * Allow strings to be passed as value parameter
 */

/**
 *
 * @param {Array, String} arr The RGB value of the color to be converted
 * @returns The HEX value of the same color
 */
const convertRgbToHex = function (arr) {
	const [r, g, b] = [...arr];

	const rHex = r.toString(16).toUpperCase();
	const gHex = g.toString(16).toUpperCase();
	const bHex = b.toString(16).toUpperCase();

	return "#" + rHex + gHex + bHex;
};

export default convertRgbToHex;
