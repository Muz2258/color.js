"use strict";
/**
 * Converts an RGB color value to a HEX color value
 * @param {Array, String} arr The RGB value of the color to be converted
 * @returns The HEX value of the same color
 */
const convertRgbToHex = function (val) {
	let r, g, b;

	if (typeof val === "string")
		[r, g, b] = val
			.split("(")[1]
			.split(")")[0]
			.split(", ")
			.map((v) => parseInt(v));
	if (Array.isArray(val)) [r, g, b] = [...val];

	const rHex = r.toString(16).toUpperCase();
	const gHex = g.toString(16).toUpperCase();
	const bHex = b.toString(16).toUpperCase();

	return "#" + rHex + gHex + bHex;
};

export default convertRgbToHex;
