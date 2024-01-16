"use strict";

import { hexToRgb, rgbToHsl } from ".";

const convertHextoHsl = function (hex) {
	debugger;
	const rgb = hexToRgb(hex);
	const hsl = rgbToHsl(rgb);

	return hsl;
};

export default convertHextoHsl;
