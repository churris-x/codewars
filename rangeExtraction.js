/*
	Battle plan:
	- reduce func
	- check if the next number is the curr + 1
*/

const extractRange0 = sequence => sequence.reduce((previous, current, index) => {
	const [sum, range] = previous;

	if (Number(range.slice(-1)) + 1 === current) return [sum, range.concat(current)]

	// if (range.length > 2) return [sum.concat(`${range[0]}-${range.slice(-1)}`), [current]];
	if (range.length > 2) return [sum.concat(range.join(',')), [current]];
	return [sum.concat(range), [current]]
}, [[], []]);

const extractRange = sequence => sequence.concat('x').reduce((previous, current) => {
	const [sum, range] = previous;

	// is the current number consecutive? add to range
	if (Number(range.slice(-1)) + 1 === current) return [sum, range.concat(current)]
	// does the range have 3 or more items? create range
	if (range.length > 2) return [sum.concat(`${range[0]}-${range.slice(-1)}`), [current]];
	// add all current items to sum
	return [sum.concat(range), [current]]

}, [[], []])[0].join();


const example = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// expected "-6,-3-1,3-5,7-11,14,15,17-20"

console.log(extractRange(example));

