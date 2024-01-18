"use strict";

import { default as hexToRgb } from "./hextorgb";
import { default as rgbToHsl } from "./rgbtohsl";

const convertHextoHsl = function (hex) {
	debugger;
	const rgb = hexToRgb(hex);
	const hsl = rgbToHsl(rgb);

	return hsl;
};

export default convertHextoHsl;
