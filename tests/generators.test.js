import { generateVariant } from "../src/color";

const iHexStr = "#DA4953",
	iRgbArr = [218, 73, 83],
	iRgbStr = "RGB(218, 73, 83)",
	iHslArr = [356, 66, 57],
	iHslStr = "HSL(356, 66%, 57%)",
	oHexStr = "#E8D4D5",
	oRgbArr = [232, 212, 213],
	oRgbStr = "RGB(232, 212, 213)",
	oHslArr = [356, 31, 87],
	oHslStr = "HSL(356, 31%, 87%)";

describe("Properly generate color variant in different output formats", () => {
	test("test 1: get output from hex string", () => {
		const options = {
			saturation: 31,
			lightness: 87,
		};

		expect(generateVariant(iHexStr, options)).toBe(oHexStr);

		options.variantColorSpace = "rgb";
	});

	test("test 2: get output from rgb array", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			baseColorSpace: "rgb",
		};

		expect(generateVariant(iRgbArr, options)).toBe(oHexStr);
	});

	test("test 3: get output from hsl array", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			baseColorSpace: "hsl",
		};

		expect(generateVariant(iHslArr, options)).toBe(oHexStr);
	});

	test("test 4: get output from rgb string", () => {
		const options = {
			saturation: 31,
			lightness: 87,
		};

		expect(generateVariant(iRgbStr, options)).toBe(oHexStr);
	});

	test("test 5: get output from hsl string", () => {
		const options = {
			saturation: 31,
			lightness: 87,
		};

		expect(generateVariant(iHslStr, options)).toBe(oHexStr);
	});

	test("test 6: get output as rgb string", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			variantColorSpace: "rgb",
		};

		expect(generateVariant(iHexStr, options)).toBe(oRgbStr);
	});

	test("test 7: get output as hsl string", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			variantColorSpace: "hsl",
		};

		expect(generateVariant(iHexStr, options)).toBe(oHslStr);
	});

	test("test 8: get output as rgb array", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			variantColorSpace: "rgb",
			variantFormat: "array",
		};

		expect(generateVariant(iHexStr, options)).toEqual(oRgbArr);
	});

	test("test 9: get output as hsl array", () => {
		const options = {
			saturation: 31,
			lightness: 87,
			variantColorSpace: "hsl",
			variantFormat: "array",
		};

		expect(generateVariant(iHexStr, options)).toEqual(oHslArr);
	});
});
