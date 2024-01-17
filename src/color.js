/* 
TODO:
* List of modules to be developed
* - Converters
* - - Hex to RGB converter
* - - Hex to HSL converter
* - - HSL to RGB converter
* - - HSL to Hex converter
* - - RGB to Hex converter
* - - RGB to HSL converter
* - Generators
* - - Color variant generator
* - - Random color generator
* FIXME: Add JSDoc comments to each module
*/

"use strict";

import { hexToRgb, hexToHsl, rgbToHex, rgbToHsl, hslToRgb, hslToHex } from "./converters";
import { generateVariant } from "./generators";

console.log(generateVariant([35, 66, 72], { saturation: 98, lightness: 88, inputType: "rgb" }));
