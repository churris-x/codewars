/*
	Battle plan:
	- remove 1 of the lowest and 1 of the highest elements in an array 	[x]
	- remove without changing order										[x]
	- rotate 3x3 array of array											[x]
	- rotate nxn														[x]
	- invert rotation													[x]
	- rotate n x m -> base rotating on row length						[x]
	- rotate and remove nxn -> (n-2)x(n-2)								[ ]
	- at the end 3x3 -> 3x1 -> [x, y, z] -> x							[ ]
*/


const remove0 = array => array.sort((a, b) => a - b).slice(1, -1);
const remove1 = array => {
	const sort = [...array].sort((a, b) => a - b)
	const remove = [array.indexOf(sort.pop()), array.indexOf(sort[0])]
	return array.filter((item, index) => remove.indexOf(index) < 0);
};
const remove2 = array => array.filter(item => [...array].sort((a, b) => a - b).slice(1, -1).includes(item));

const remove = array => array.filter((item, index) => [
	array.indexOf(Math.min(...array)),
	array.indexOf(Math.max(...array))
].indexOf(index) < 0);

console.log(remove([5, 8, 4, 5, 6])); // [5, 5, 6]
console.log(remove([6, 8, 4, 5, 5])); // [6, 5, 5]
console.log(remove([9, 2, 5, 8, 5, 2, 9])); // [5, 8, 5, 2, 9]

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
