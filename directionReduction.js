/*
	Battle plan:
	- reduce function
	- n/s and e/w cancel each other only when next to each other
	- a cancelation may cause another cancelation
*/

const directionReduce = headings => headings.reduce((previous, current) => {
	// const [prevHeadings, last] = [sum.slice(0, -1), sum.slice(-1)];
	previous.pop();

	const x = ['EAST', 'WEST'];
	const y = ['NORTH', 'SOUTH'];

});


const example = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
// expected: ['WEST']

console.log()