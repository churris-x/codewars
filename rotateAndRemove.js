/*
	Battle plan:
	- remove 1 of the lowest and 1 of the highest elements in an array 	[x]
	- rotate 3x3 array of array											[x]
	- rotate nxn														[x]
	- rotate and remove nxn -> (n-2)x(n-2)								[ ]
	- at the end 3x3 -> 3x1 -> [x, y, z] -> x							[ ]
*/


const remove = array => array.sort((a, b) => a - b).slice(1, -1);

// console.log(remove([5, 8, 4, 5, 6])); // [5, 5, 6]
// console.log(remove([9, 2, 5, 8, 5, 2, 9])); // [2, 5, 5, 8, 9]

const square = [
	[5, 5, 5],
	[3, 5, 4],
	[4, 6, 3],
];

const rotate = square => square.reduce((newSquare, currRow, index, array) => {

	if (!index) return [...Array(array.length).keys()].map((row, i) => [array[index][i]]);

	return newSquare.map((row, i) => [...row, array[index][i]]);
}, []);

console.log(rotate(square));