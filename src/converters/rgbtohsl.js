/*
 * TODO:
 * Allow passing strings as color value parameter
 * Allow option to select output format - String or Array
 */

"use strict";

/**
 * Convert a color from RGB color space to HSL color space
 * @param {Array, String} val The RGB value of the color to be converted
 * @param {String} f The format of the output color
 * @returns The HSL value of the same color
 */
const convertRgbToHsl = function (val, f = "array") {
	let r, g, b, h, s, l;

	if (Array.isArray(val)) [r, g, b] = val.map((v) => v / 255);
	if (typeof val === "string")
		[r, g, b] = val
			.split("(")[1]
			.split(")")[0]
			.split(",")
			.map((v) => v / 255);

	const minVal = Math.min(r, g, b);
	const maxVal = Math.max(r, g, b);
	l = (minVal + maxVal) / 2;

	if (minVal === maxVal) {
		h = s = 0;
	} else {
		const d = maxVal - minVal;

		s = l > 0.5 ? d / (2 - maxVal - minVal) : d / (maxVal + minVal);

		switch (maxVal) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h = Math.round((h / 6) * 360);
		s = Math.round(s * 100);
		l = Math.round(l * 100);
	}

	if (f === "string") return `HSL(${h}, ${s}%, ${l}%)`;
	else return [h, s, l];
};

export default convertRgbToHsl;
