"use strict";

/**
 * Converts the HEX value of a color to its RGB equivalent
 * @param {String} val The hexadecimal value of a color in RGB color space
 * @param {String} f The output format desired - string or array
 * @returns The RGB value of same color
 */
const convertHexToRgb = function (val, f = "array") {
	const noHash = val.slice(1);

	const r = parseInt(noHash.slice(0, 2), 16);
	const g = parseInt(noHash.slice(2, 4), 16);
	const b = parseInt(noHash.slice(4), 16);

	if (f === "string") return `RGB(${r}, ${g}, ${b})`;
	else return [r, g, b];
};

export default convertHexToRgb;
