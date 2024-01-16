"use strict";

import { hexToRgb, rgbToHex } from "./converters";

console.log(
	`Hex to RGB\nHex: #234AC3 - RGB: ${hexToRgb(
		"#234AC3"
	)}\nRGB to Hex\nRGB: 35, 74, 195 - Hex: ${rgbToHex([35, 74, 195]).toUpperCase()}`
);
