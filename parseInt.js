// translate words into numbers
// 0 to 1 000 000

const parseInt = string => {
	const digits = {
		zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
		eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
		fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
		nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60,
		seventy: 70, eighty: 80, ninety: 90,
	};
	const places = {
		hundred: 100,
		thousand: 1000,
		million: 1000000,
	};

	const parse = string => string
		.split('').map(i => i === '-' ? ' ' : i).join('')
		.split(' ').reduce((sum, curr) => {
			const digit = digits[curr];
			const place = places[curr];

			if (digit) return sum + digit;
			if (place) return place * sum;
			return sum;
		}, 0);

	return string.split('thousand').reduce((sum, curr, index) => {
		const total = parse(curr);
		if (index === 1) return sum * 1000 + parse(curr);
		return total;
	}, 0);
};

console.log(parseInt('two'));
console.log(parseInt('two thousand'));
console.log(parseInt('one thousand'));
console.log(parseInt('two hundred forty-six'));
console.log(parseInt('seven hundred eighty-three thousand'));
console.log(parseInt('seven hundred eighty-three thousand and nineteen'));
console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'));

