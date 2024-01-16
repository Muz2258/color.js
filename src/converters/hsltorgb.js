"use strict";

const convertHslToRgb = function (arr) {
	const [h, s, l] = [...arr];
	let r, g, b, r_, g_, b_;

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const h_ = (h * 360) / 60;
	const x = c * (1 - Math.abs((h_ % 2) - 1));

	if (0 <= h_ && h_ <= 1) [r_, g_, b_] = [...[c, x, 0]];
	if (1 <= h_ && h_ <= 2) [r_, g_, b_] = [...[x, c, 0]];
	if (2 <= h_ && h_ <= 3) [r_, g_, b_] = [...[0, c, x]];
	if (3 <= h_ && h_ <= 4) [r_, g_, b_] = [...[0, x, c]];
	if (4 <= h_ && h_ <= 5) [r_, g_, b_] = [...[x, 0, c]];
	if (5 <= h_ && h_ <= 6) [r_, g_, b_] = [...[c, 0, x]];

	const m = l - c / 2;

	r = Math.round((r_ + m) * 255);
	g = Math.round((g_ + m) * 255);
	b = Math.round((b_ + m) * 255);

	return [r, g, b];
};

export default convertHslToRgb;
