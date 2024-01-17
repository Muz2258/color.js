"use strict";

import { generateVariant } from "./src/color";

const options = {
	saturation: 80,
	lightness: 50,
};

console.log(generateVariant("#3C11AD", options));
