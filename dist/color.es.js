/*
* - color.js v1.0.0
* - A simple js library to convert colors between color spaces and generate color variants of a specified color
*
* - Copyright Emamuzo Okerri 2024
* - ISC license
 */
const convertHexToRgb = function (hex) {
	const noHash = hex.slice(1);
	const r = parseInt(noHash.slice(0, 2), 16);
	const g = parseInt(noHash.slice(2, 4), 16);
	const b = parseInt(noHash.slice(4), 16);
	return [r, g, b];
};const convertRgbToHsl = function (arr) {
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
};const convertHextoHsl = function (hex) {
	debugger;
	const rgb = convertHexToRgb(hex);
	const hsl = convertRgbToHsl(rgb);
	return hsl;
};const convertRgbToHex = function (arr) {
	const [r, g, b] = [...arr];
	const rHex = r.toString(16);
	const gHex = g.toString(16);
	const bHex = b.toString(16);
	return "#" + rHex + gHex + bHex;
};const convertHslToRgb = function (arr) {
	let [h, s, l] = [...arr];
	let r, g, b, r_, g_, b_;
	s = s / 100;
	l = l / 100;
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const h_ = h / 60;
	const x = c * (1 - Math.abs((h_ % 2) - 1));
	if (0 <= h_ && h_ <= 1) [r_, g_, b_] = [c, x, 0];
	if (1 <= h_ && h_ <= 2) [r_, g_, b_] = [x, c, 0];
	if (2 <= h_ && h_ <= 3) [r_, g_, b_] = [0, c, x];
	if (3 <= h_ && h_ <= 4) [r_, g_, b_] = [0, x, c];
	if (4 <= h_ && h_ <= 5) [r_, g_, b_] = [x, 0, c];
	if (5 <= h_ && h_ <= 6) [r_, g_, b_] = [c, 0, x];
	const m = l - c / 2;
	r = Math.round((r_ + m) * 255);
	g = Math.round((g_ + m) * 255);
	b = Math.round((b_ + m) * 255);
	return [r, g, b];
};const convertHslToHex = function (arr) {
	const rgb = convertHslToRgb(arr);
	const hex = convertRgbToHex(rgb);
	return hex;
};const generateVariant = function (base, options) {
	let s, l, i, o, f, rgb, newRgb, hsl, output;
	s = options.saturation || 100;
	l = options.lightness || 50;
	i = options.inputType || null;
	o = options.outputType || "hex";
	f = options.outputFormat || "string";
	if (typeof base === "string") {
		if (base.includes("rgb")) {
			rgb = base
				.split("(")[1]
				.split(")")[0]
				.split(", ")
				.map((n) => parseInt(n));
			hsl = convertRgbToHsl(rgb);
		}
		if (base.includes("hsl")) {
			hsl = base
				.split("(")[1]
				.split(")")[0]
				.split(", ")
				.map((c, i) => (i === 0 ? c : c.split("%")[0]));
		}
		if (base.includes("#")) {
			rgb = convertHexToRgb(base);
			hsl = convertRgbToHsl(rgb);
		}
	} else if (Array.isArray(base) && i !== null) {
		if (i === "rgb") {
			hsl = convertRgbToHsl(base);
		}
		if (i === "hsl") {
			hsl = base;
		}
	}
	hsl[1] = s;
	hsl[2] = l;
	newRgb = convertHslToRgb(hsl);
	if (f === "string") {
		if (o === "rgb") output = "rgb(" + newRgb[0] + ", " + newRgb[1] + ", " + newRgb[2] + ")";
		if (o === "hsl") output = "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
		if (o === "hex") output = convertRgbToHex(newRgb).toUpperCase();
	} else if (f === "array") {
		if (o === "rgb") output = newRgb;
		if (o === "hsl") output = hsl;
	}
	return output;
};export{generateVariant,convertHextoHsl as hexToHsl,convertHexToRgb as hexToRgb,convertHslToHex as hslToHex,convertHslToRgb as hslToRgb,convertRgbToHex as rgbToHex,convertRgbToHsl as rgbToHsl};