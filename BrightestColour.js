/*
	RGB is a very common way to represent colours, 
	however one of the alternatives is HSV, hue, value and saturation.
	Value = max( R, G, B )
	Given a list of hex codes, return the brightest colour.

	Battle plan:
	- [x] split rgb function / method
	- [x] reduce to get the max value
	- [x] reduce list of colours by comparing highest value
	- [x] account for 1 item in array

	E.g.: 

	["#00FF00", "#FFFF00", "#01130F"] => "#00FF00"
	// i0 and i1 both have the same value 'FF', but the first item is returned
*/

// console.log([...Array(3).keys()].map( i => '#2F577F'.slice(i*2 +1, i*2 +3))); // bad method

const brightestColor = hexList => {
	const getValue = hex => hex
		.substring(1)
		.match(/.{2}/g)
		.reduce((a, b) => a > b ? a : b, 0x00);

	return hexList.reduce((a, b) => getValue(a) >= getValue(b) ? a : b);
};

console.log(brightestColor(["#00FF00", "#FFFF00", "#01130F"]));
console.log(brightestColor(["#FFFF00", "#00FF00", "#01130F"]));
console.log(brightestColor(["#01130F"]));
