/*
	Battle plan:
	- reduce func
	- check if the next number is the curr + 1
	- 
*/

const extractRange0 = sequence => sequence.reduce((previous, current) => {
	const [sum, range] = previous.split('&');
	
	if (range) 

	return sum + '&' + range + current;
}, '&');


const extractRange = sequence => sequence.reduce((previous, current) => {
	const [sum, range] = previous;

	if (range.length === 0) return [sum, [current]];
	if (range.slice(-1) + 1 === current) return [sum, range.concat(current)]

	return [sum.concat(range.join(',')), [current]];
}, [[], []]);


const example = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// "-6,-3-1,3-5,7-11,14,15,17-20"

console.log(extractRange(example));

