"use strict";

/*
 * TODO:
 * Allow passing strings as color value parameter
 * Allow option to select output format - String or Array
 */

/**
 * Convert a color from RGB color space to HSL color space
 * @param {Array, String} arr The RGB value of the color to be converted
 * @returns The HSL value of the same color
 */
const convertRgbToHsl = function (arr) {
	const [r, g, b] = arr.map((v) => (v /= 255));

	const minVal = Math.min(r, g, b);
	const maxVal = Math.max(r, g, b);
	const l = (minVal + maxVal) / 2;

	let h, s;

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
		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

export default convertRgbToHsl;
