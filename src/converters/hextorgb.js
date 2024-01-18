"use strict";

const convertHexToRgb = function (hex) {
	const noHash = hex.slice(1);

	const r = parseInt(noHash.slice(0, 2), 16);
	const g = parseInt(noHash.slice(2, 4), 16);
	const b = parseInt(noHash.slice(4), 16);

	return [r, g, b];
};

export default convertHexToRgb;
