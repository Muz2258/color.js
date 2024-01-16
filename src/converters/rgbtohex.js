"use strict";

const convertRgbToHex = function (arr) {
	const [r, g, b] = [...arr];

	const rHex = r.toString(16);
	const gHex = g.toString(16);
	const bHex = b.toString(16);

	return "#" + rHex + gHex + bHex;
};

export default convertRgbToHex;
