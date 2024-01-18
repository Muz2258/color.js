"use strict";

import { default as hslToRgb } from "./hsltorgb";
import { default as rgbToHex } from "./rgbtohex";

const convertHslToHex = function (arr) {
	const rgb = hslToRgb(arr);
	const hex = rgbToHex(rgb);

	return hex;
};

export default convertHslToHex;
