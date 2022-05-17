const meeting0 = input => {

	// All uppercase, 
	// split by person and then again by first and last name, 
	// put last name as first item
	const users = input.toUpperCase().split(';').map(i => i.split(':').reverse());

	// Sort by last name, secondarily by first
	users.sort((a, b) => {
		const lastName = a[0].localeCompare(b[0]);
		if (lastName) return lastName;
		return a[1].localeCompare(b[1]);
	});

	// Join with parenthesis and insert space between each comma
	const output = '(' + users.join(')(').split(',').join(', ') + ')';

	return output;
};

const meeting = list => list
	.toUpperCase()
	.split(';')											// Split people
	.map(name => name.split(':'))						// Split names
	.map(([first, last]) => `(${last}, ${first})`)		// Reorder and encapsulate names
	.sort()												// Sort lexicographically
	.join('');

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))