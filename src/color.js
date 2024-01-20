/* 
TODO:
* List of modules to be developed
* - Generators
* - - Random color generator
* Write tests for all functions
* Change Library name
*/

"use strict";

export { default as hexToHsl } from "./converters/hextohsl.js";
export { default as hexToRgb } from "./converters/hextorgb.js";
export { default as rgbToHex } from "./converters/rgbtohex.js";
export { default as rgbToHsl } from "./converters/rgbtohsl.js";
export { default as hslToHex } from "./converters/hsltohex.js";
export { default as hslToRgb } from "./converters/hsltorgb.js";
export { default as generateVariant } from "./generators/variant.js";
