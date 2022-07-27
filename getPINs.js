/*
key pad
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

hmm this is a data structure question
how to organize the un symetrical relationship between possible outcomes?

also a combinatorics issue (n chose k), can I do something with binary?

eg:
    '8': ['5', '7', '8', '9', '0']
    
    '11': ['11', '22', '44', '12', '21', '14', '41', '24', '42']
*/

// const getNumbers = pin => [...pin].map(n => numbers[Number(n)].map(i => i));

const getPins = pin => {
	const numbers = [
		[0, 8],
		[1, 2, 4],
		[2, 1, 3, 5],
		[3, 2, 6],
		[4, 1, 5, 7],
		[5, 2, 4, 6, 8],
		[6, 3, 5, 9],
		[7, 4, 8],
		[8, 0, 5, 7, 9],
		[9, 6, 8],
	];

	const possibleKeys = [...pin].map(n => numbers[Number(n)]);
	const totalComb = possibleKeys.reduce((product, current) => product * current.length, 1);

	const combinations = [...Array(totalComb).keys()].map(i => possibleKeys
		.reduce((s, c) => {
			console.log(c[~~(i/(totalComb/c.length))])
			return s.concat(c[ ~~(i/(totalComb/c.length))  ])
		}, [])
	);

	return combinations;
};

// console.log(getPins('8'));
// console.log(getPins('11'));
console.log(getPins('10'));
// console.log(getPins('010'));

