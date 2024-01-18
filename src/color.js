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

export { default as hexToHsl } from "./converters/hextohsl";
export { default as hexToRgb } from "./converters/hextorgb";
export { default as rgbToHex } from "./converters/rgbtohex";
export { default as rgbToHsl } from "./converters/rgbtohsl";
export { default as hslToHex } from "./converters/hsltohex";
export { default as hslToRgb } from "./converters/hsltorgb";
export { default as generateVariant } from "./generators/variant";
