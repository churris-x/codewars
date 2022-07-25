/*
	Battle plan:
	- reduce function
	- n/s and e/w cancel each other only when next to each other
	- a cancelation may cause another cancelation
*/

const directionReduce0 = headings => headings.reduce((previous, current) => {

	const value = {
		'NORTH': 1,
		'SOUTH': -1,
		'EAST': 2,
		'WEST': -2,
	}

	const prevHeading = previous.pop();

	if (value[prevHeading] + value[current] === 0) return previous;

	return previous.concat(prevHeading, current);
}, ['']).slice(1);

const directionReduce = headings => headings.reduce((previous, current) => 
	['NORTHSOUTH', 'EASTWEST'].includes(
		[previous.slice(-1), current].sort().join('')
	) 
	? previous.slice(0, -1)
	: previous.concat(current)
, []);


const example = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']; // expected: ['WEST']

console.log(directionReduce(example));
console.log(directionReduce(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(directionReduce(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
console.log(directionReduce(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"])); // [ 'EAST', 'NORTH' ]
