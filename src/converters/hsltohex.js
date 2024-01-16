"use strict";

import { hslToRgb, rgbToHex } from ".";

const convertHslToHex = function (arr) {
	const rgb = hslToRgb(arr);
	const hex = rgbToHex(rgb);

	return hex;
};

export default convertHslToHex;
