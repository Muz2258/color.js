import { hexToHsl, hexToRgb, rgbToHex, rgbToHsl, hslToHex, hslToRgb } from "../src/color";

const hexStr = "#DA4953",
	hexStr2 = "#18635F",
	rgbStr = "RGB(218, 73, 83)",
	rgbStr2 = "RGB(24, 99, 95)",
	rgbStr3 = "RGB(100, 75, 210)",
	rgbArr = [218, 73, 83],
	rgbArr2 = [24, 99, 95],
	rgbArr3 = [100, 75, 210],
	hslStr = "HSL(356, 66%, 57%)",
	hslStr2 = "HSL(177, 61%, 24%)",
	hslStr3 = "HSL(251, 60%, 56%)",
	hslArr = [356, 66, 57],
	hslArr2 = [177, 61, 24],
	hslArr3 = [251, 60, 56];

describe("convert color from rgb to hsl", () => {
	test("test 1: input and output as array", () => {
		expect(rgbToHsl(rgbArr)).toEqual(hslArr);
		expect(rgbToHsl(rgbArr2)).toEqual(hslArr2);
		expect(rgbToHsl(rgbArr3)).toEqual(hslArr3);
	});

	test("test 2: input as array and output as string", () => {
		expect(rgbToHsl(rgbArr, "string")).toBe(hslStr);
		expect(rgbToHsl(rgbStr2, "string")).toBe(hslStr2);
		expect(rgbToHsl(rgbStr3, "string")).toBe(hslStr3);
	});

	test("test 3: input as string and output as array", () => {
		expect(rgbToHsl(rgbStr)).toEqual(hslArr);
		expect(rgbToHsl(rgbStr2)).toEqual(hslArr2);
		expect(rgbToHsl(rgbStr3)).toEqual(hslArr3);
	});

	test("test 4: input and output as string", () => {
		expect(rgbToHsl(rgbStr, "string")).toBe(hslStr);
		expect(rgbToHsl(rgbStr2, "string")).toBe(hslStr2);
		expect(rgbToHsl(rgbStr3, "string")).toBe(hslStr3);
	});
});

describe("convert color from rgb to hex", () => {
	test("test 1: input as array", () => {
		expect(rgbToHex(rgbArr)).toBe(hexStr);
	});

	test("test 2: input as string", () => {
		expect(rgbToHex(rgbStr)).toBe(hexStr);
	});
});

describe("convert color from hsl to rgb", () => {
	test("test 1: input and output as array", () => {
		expect(hslToRgb(hslArr)).toEqual(rgbArr);
		expect(hslToRgb(hslArr2)).toEqual(rgbArr2);
		expect(hslToRgb(hslArr3)).toEqual(rgbArr3);
	});

	test("test 2: input as array and output as string", () => {
		expect(hslToRgb(hslArr, "string")).toBe(rgbStr);
		expect(hslToRgb(hslArr2, "string")).toBe(rgbStr2);
		expect(hslToRgb(hslArr3, "string")).toBe(rgbStr3);
	});

	test("test 3: input as string and output as array", () => {
		expect(hslToRgb(hslStr)).toEqual(rgbArr);
		expect(hslToRgb(hslStr2)).toEqual(rgbArr2);
		expect(hslToRgb(hslStr3)).toEqual(rgbArr3);
	});

	test("test 3: input and output as string", () => {
		expect(hslToRgb(hslStr, "string")).toBe(rgbStr);
		expect(hslToRgb(hslStr2, "string")).toBe(rgbStr2);
		expect(hslToRgb(hslStr3, "string")).toBe(rgbStr3);
	});
});

describe("convert color from hsl to hex", () => {
	test("test 1: input and output as string", () => {
		expect(hslToHex(hslStr)).toBe(hexStr);
	});

	test("test 2: input as array and output as string", () => {
		expect(hslToHex(hslArr)).toBe(hexStr);
	});
});

describe("convert color from hex to rgb", () => {
	test("test 1: output as array", () => {
		expect(hexToRgb(hexStr)).toEqual(rgbArr);
	});

	test("test 2: output as string", () => {
		expect(hexToRgb(hexStr, "string")).toBe(rgbStr);
	});
});

describe("convert color from hex to hsl", () => {
	test("test 1: output as array", () => {
		expect(hexToHsl(hexStr)).toEqual(hslArr);
	});

	test("test 2: output as string", () => {
		expect(hexToHsl(hexStr, "string")).toBe(hslStr);
	});
});
