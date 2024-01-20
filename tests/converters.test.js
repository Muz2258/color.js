import { hexToHsl, hexToRgb, rgbToHex, rgbToHsl, hslToHex, hslToRgb } from "../src/color";

const hexString = "#DA4953",
	rgbString = "RGB(218, 73, 83)",
	rgbArray = [218, 73, 83],
	hslString = "HSL(356, 66%, 57%)",
	hslArray = [356, 66, 57];

test("Properly convert color from HEX to HSL", () => {
	expect(hexToHsl(hexString)).toEqual(hslArray);
});

test("Properly convert color from HEX to RGB", () => {
	expect(hexToRgb(hexString)).toEqual(rgbArray);
});

test("Properly convert color from RGB to HEX", () => {
	expect(rgbToHex(rgbArray)).toBe(hexString);
});

test("Properly convert color from RGB to HSL", () => {
	expect(rgbToHsl(rgbArray)).toEqual(hslArray);
});

test("Properly convert color from HSL to HEX", () => {
	expect(hslToHex(hslArray)).toBe(hexString);
});

test("Properly convert color from HSL to RGB", () => {
	expect(hslToRgb(hslArray)).toEqual(rgbArray);
});
