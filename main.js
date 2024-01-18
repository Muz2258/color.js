"use strict";

// import { generateVariant } from "./src/color";
import { generateVariant } from "./dist/color.cjs";

const options = {
	saturation: 80,
	lightness: 50,
};

console.log(generateVariant("#3C11AD", options));
