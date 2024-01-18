/* 
TODO:
* List of modules to be developed
* - Generators
* - - Random color generator
*/

"use strict";

export { default as hexToHsl } from "./converters/hextohsl";
export { default as hexToRgb } from "./converters/hextorgb";
export { default as rgbToHex } from "./converters/rgbtohex";
export { default as rgbToHsl } from "./converters/rgbtohsl";
export { default as hslToHex } from "./converters/hsltohex";
export { default as hslToRgb } from "./converters/hsltorgb";
export { default as generateVariant } from "./generators/variant";
