/*
	Battle plan:
	- remove 1 of the lowest and 1 of the highest elements in an array 	[x]
	- remove without changing order										[x]
	- rotate 3x3 array of array											[x]
	- rotate nxn														[x]
	- invert rotation													[x]
	- rotate n x m -> base rotating on row length						[x]
	- rotate and remove nxn -> (n-2)x(n-2)								[x]
	- at the end 3x3 -> 3x1 -> [x, y, z] -> x							[x]
*/


const remove0 = array => array.sort((a, b) => a - b).slice(1, -1);
const remove1 = array => {
	const sort = [...array].sort((a, b) => a - b)
	const remove = [array.indexOf(sort.pop()), array.indexOf(sort[0])]
	return array.filter((item, index) => remove.indexOf(index) < 0);
};
const remove2 = array => array.filter(item => [...array].sort((a, b) => a - b).slice(1, -1).includes(item));

const remove = array => array.every(i => i === array[0]) ? array.slice(2) : array.filter((item, index) => [
	array.indexOf(Math.min(...array)),
	array.indexOf(Math.max(...array))
].indexOf(index) < 0);

// console.log(remove([5, 8, 4, 5, 6])); // [5, 5, 6]
// console.log(remove([6, 8, 4, 5, 5])); // [6, 5, 5]
// console.log(remove([9, 2, 5, 8, 5, 2, 9])); // [5, 8, 5, 2, 9]
// console.log(remove([3, 3, 3])); // [3]

const square = [
	[5, 5, 5],
	[3, 5, 4],
	[4, 6, 3],
];
const largeSquare = [
	[3, 5, 8, 4, 2],			// [2, 8, 2, 5, 1],
	[1, 9, 2, 3, 8],			// [4, 3, 2, 5, 8],
	[4, 6, 7, 2, 2],			// [8, 2, 7, 5, 3],
	[7, 5, 5, 5, 5],			// [5, 9, 6, 5, 5],
	[6, 5, 3, 8, 1],			// [3, 1, 4, 7, 6],
];
const rectangle = [
	[5, 5],
	[3, 5],
	[4, 6],
];

const rotate = square => square.reduce((rSquare, currRow, index, array) => {

	if (!index) return [...Array(array.length).keys()].map((row, i) => [array[index][array.length - 1 - i]]);

	const newSquare = rSquare.map((row, i) => [...row, array[index][array.length - 1 - i]]);

	if (index + 1 === array.length && currRow.length < array.length) return newSquare.slice(array.length - currRow.length);
	return newSquare;
}, []);

// console.log(rotate(square));
// console.log(rotate(largeSquare));
// console.log(rotate(rectangle));

const decrease = square => rotate(square).map(row => remove(row));

// console.log(decrease(largeSquare));
// console.log(decrease(decrease(largeSquare)));
// console.log(decrease(decrease(decrease(largeSquare))));
// console.log(decrease(decrease(decrease(decrease(largeSquare)))));

const rotateAndRemove = input => {
	const rotate = square => square.reduce((rSquare, currRow, index, array) => {
		if (!index) return [...Array(array.length).keys()].map((row, i) => [array[index][array.length - 1 - i]]);

		const newSquare = rSquare.map((row, i) => [...row, array[index][array.length - 1 - i]]);

		// if rectangle remove leftover rows at the end
		if (index + 1 === array.length && currRow.length < array.length) return newSquare.slice(array.length - currRow.length);
		return newSquare;
	}, []);

	const remove = array => array.every(i => i === array[0]) ? array.slice(2) : array.filter((item, index) => [
		array.indexOf(Math.min(...array)),
		array.indexOf(Math.max(...array))
	].indexOf(index) < 0);

	return [...Array(input.length - 1)].reduce(square => rotate(square).map(row => remove(row)), input)[0][0];
};

// console.log(rotateAndRemove(largeSquare));
// console.log(rotateAndRemove(square));
// console.log(rotateAndRemove([
// 	[13, 25, 38, 44, 52],
// 	[61, 79, 82, 93, 18],
// 	[24, 36, 47, 52, 62],
// 	[77, 85, 95, 15, 25],
// 	[36, 45, 53, 68, 71]
// ]));
// console.log(rotateAndRemove([
// 	[50, 51, 51, 51, 51],
// 	[51, 51, 50, 51, 51],
// 	[50, 50, 51, 50, 51],
// 	[51, 51, 51, 51, 51],
// 	[51, 50, 49, 50, 50]
// ]));