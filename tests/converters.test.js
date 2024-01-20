import { hexToHsl, hexToRgb, rgbToHex, rgbToHsl, hslToHex, hslToRgb } from "../src/color";

const hexStr = "#DA4953",
	rgbStr = "RGB(218, 73, 83)",
	rgbArr = [218, 73, 83],
	hslStr = "HSL(356, 66%, 57%)",
	hslArr = [356, 66, 57];

describe("convert color from rgb to hsl", () => {
	test("test 1: input and output as array", () => {
		expect(rgbToHsl(rgbArr)).toEqual(hslArr);
	});

	test("test 2: input as array and output as string", () => {
		expect(rgbToHsl(rgbArr)).toEqual(hslStr);
	});

	test("test 3: input as string and output as array", () => {
		expect(rgbToHsl(rgbStr)).toEqual(hslArr);
	});

	test("test 4: input and output as string", () => {
		expect(rgbToHsl(rgbStr)).toEqual(hslArr);
	});
});
