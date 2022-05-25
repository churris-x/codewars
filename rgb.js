const rgb0 = (r, g, b) => [r, g, b].map(
	byte => Math.max(0, Math.min(255, byte)).toString(16).padStart(2, '0').toUpperCase()
).reduce((hex, byte) => hex + byte);

// optimized for the problem
const rgb1 = (r, g, b) => [r, g, b].map(
	byte => Math.max(0, Math.min(255, byte)).toString(16).padStart(2, '0').toUpperCase()
).join('');

const rgb = (...args) => args.map(
	byte => Math.max(0, Math.min(255, byte)).toString(16).padStart(2, '0').toUpperCase()
).reduce((hex, byte) => hex + byte, '#');

// rgba, r, g, b => 0 - 255, "a" => 0 - 1
const rgba = (r, g, b, a) => [r, g, b, Math.round(a * 255)].map(
	byte => Math.max(0, Math.min(255, byte)).toString(16).padStart(2, '0').toUpperCase()
).reduce((hex, byte) => hex + byte, '#');


console.log(rgb(33, 234324, -54343))
console.log(rgb(5, 201, 118))
console.log(rgb(0, 0, 0))
console.log(rgb(255, 255, 255))