"use strict";

import { hexToRgb, rgbToHex, hslToRgb } from "./converters";

console.log(
	`Hex to RGB\nHex: #234AC3 - RGB: ${hexToRgb(
		"#234AC3"
	)}\nRGB to Hex\nRGB: 35, 74, 195 - Hex: ${rgbToHex([
		35, 74, 195,
	]).toUpperCase()}\nHSL to RGB\nHSL: 30, 50%, 75% - RGB: ${hslToRgb([30, 50, 75])}`
);
