// (255, 255, 0) => '#FFFF00'
const rgbToHex = (...args) => args.map(
	byte => Math.max(0, Math.min(255, byte)).toString(16).padStart(2, '0')
).reduce((hex, byte) => hex + byte, '#');

// '#FFFF00' => [255, 255, 0]
const hexToRBG = hex => hex.substring(1).match(/.{2}/g).map(color => parseInt(color, 16));

// '#1F4C49' => '#FFFFFF'
const getFontColor = color => color
	.substring(1)
	.match(/.{2}/g)
	.reduce((lum, c, index) => lum + parseInt(c, 16) * [299, 587, 114][index], 0)
	< 160000 ? '#FFFFFF' : '#000000';

// 1 => #F7DDCE, 2 => #2F577F
const hexHash = (x, salt = 44) => '#' + ((x + salt + 1) * 2654435761).toString(16).slice(-6);