const simplify0 = input => {
	const poly = input.startsWith('-') ? input : '+'.concat(input)

	let current = '';
	let number = '';
	const terms = [];

	[...poly].forEach((char, index) => {
		if (char === '+' || char === '-') {
			if (current) terms.push({
				val: current.substring(1),
				count: Number(number) ? Number(number) : 1,
				sign: current.charAt(0)
			}); 							// if first
			current = char;
			number = '';
		} else {
			if (Number.isInteger(Number(char))) {
				number += char;
				// } else if (number) {
				// current += char.repeat(Number(number));
			} else {
				current += char;
				// number = '';
			}
			if (index === poly.length - 1) terms.push({
				val: current.substring(1),
				count: Number(number) ? Number(number) : 1,
				sign: current.charAt(0)
			});			// if last
		}
	});

	terms.sort((a, b) => a.val.localeCompare(b.val));

	const sum = [];
	let total = 0;
	let type = '';

	terms.forEach((term, index) => {
		const value = [...term.val].sort().join('');
		if (value === type) {
			total = total + Number(term.sign + term.count);
		} else {
			if (total !== 0) sum.push(`${Math.abs(total) === 1 ? total > 0 ? '+' : '-' : total > 0 ? '+'.concat(total) : total}${type}`);
			type = value
			total = Number(term.sign + term.count);
		}

		if (index === terms.length - 1 && total !== 0) sum.push(`${Math.abs(total) === 1 ? total > 0 ? '+' : '-' : total > 0 ? '+'.concat(total) : total}${type}`);
	});

	console.log(poly)
	console.log(terms)

	sum.sort((a, b) => {
		const aChar = [...a].filter(i => 'abcdefghijklmnopqrstuvwxyz'.includes(i)).join('');
		const bChar = [...b].filter(i => 'abcdefghijklmnopqrstuvwxyz'.includes(i)).join('');
		const lengthCompare = aChar.length - bChar.length;
		return lengthCompare === 0 ? aChar.localeCompare(bChar) : lengthCompare;
	});

	const result = sum.join('')

	return result.startsWith('+') ? result.substring(1) : result
};

const simplify1 = input => {

	const poly = input.startsWith('-') ? input : '+'.concat(input)

	const varSort = term => {
		const stuff = [...term].filter(i => '+-0123456789'.includes(i)).join('');
		const letters = [...term].filter(i => !'+-0123456789'.includes(i)).sort().join('');
		return stuff.concat(letters);
	}
	const termSort = (a, b) => {
		const aChar = [...a].filter(i => !'+-0123456789'.includes(i)).join('');
		const bChar = [...b].filter(i => !'+-0123456789'.includes(i)).join('');
		const lengthCompare = aChar.length - bChar.length;
		return lengthCompare === 0 ? aChar.localeCompare(bChar) : lengthCompare;
	};

	const terms = [...poly]
		// Add a space before every + or -, then split the terms
		.map(i => '+-'.includes(i) ? ` ${i}` : i).join('').split(' ') // remove substring(1)?
		// Sort internal variables
		.map(varSort)
		// Sort the terms
		.sort(termSort);

	const sum = terms.reduce((previous, current, index, array) => {
		const prevChar = [...array[index - 1]].filter(i => !'+-0123456789'.includes(i)).join('');
		const currChar = [...current].filter(i => !'+-0123456789'.includes(i)).join('');

		if (prevChar === currChar) {
			// add numbers

			const prevNum = !previous ? 0 : [...previous.pop()].filter(i => '+-0123456789'.includes(i)).join('');
			const currNum = [...current].filter(i => '+-0123456789'.includes(i)).join('');

			const one = str => str === '+' || str === '-' ? str.concat('1') : str;

			const num = Number(one(prevNum)) + Number(one(currNum));

			const amount = num === 1 ? num >= 0 ? '+' : '-' : num >= 0 ? '+'.concat(num) : num;


			if (index === array.length - 1) return [...previous, `${amount}${currChar}`].filter(i => !i.includes('+0')).join('')
			return [...previous, `${amount}${currChar}`]
		}
		if (index === array.length - 1) return [...previous, current].filter(i => !i.includes('+0')).join('')

		return [...previous, current];

	});

	// console.log(poly)
	// console.log(terms)
	return sum[0] === '+' ? sum.substring(1) : sum;
};

const simplify2 = input => {

	const poly = '+-'.includes(input[0]) ? input : '+'.concat(input);

	// Extract either the number or variables from a term. Eg: "+3ab" -> +3 or ab
	const getNum = term => [...term].filter(i => '+-0123456789'.includes(i)).join('');
	const getVar = term => [...term].filter(i => !'+-0123456789'.includes(i)).join('');

	// Sort variables in a term. Eg: xfc -> cfx
	const varSort = term => {
		const amount = getNum(term);
		const variables = [...term].filter(i => !'+-0123456789'.includes(i)).sort().join('');
		return amount.concat(variables);
	}
	// Sort terms by 1) number of variables 2) lexical order
	const termSort = (a, b) => {
		const aChar = getVar(a);
		const bChar = getVar(b);
		const lengthCompare = aChar.length - bChar.length;
		return lengthCompare === 0 ? aChar.localeCompare(bChar) : lengthCompare;
	};

	const parseOne = number => {
		switch (number) {
			case '+': return '1';
			case '-': return '-1';
			case '+1': return '1';
			case '-1': return '-1';
			case 1: return '+';
			case -1: return '-';
			case 0: return '+0';
			default: return number;
		}
	}

	const terms = [...poly]
		// Add a space before every + or -, then split into terms
		.map(i => '+-'.includes(i) ? ` ${i}` : i).join('').split(' ')
		// Remove incorrect 1's
		.map(i => Math.abs(getNum(i)) === 1 ? i[0].concat(i.substring(2)) : i)
		// Sort variables
		.map(varSort)
		// Sort the terms
		.sort(termSort);


	const sum = terms.reduce((previous, current, index, array) => {
		const isLast = index === array.length - 1;

		const prevChar = getVar(array[index - 1]);
		const currChar = getVar(current);

		if (prevChar === currChar) {
			const prevNum = !previous ? 0 : getNum(previous.pop());
			const currNum = getNum(current);

			const num = Number(parseOne(prevNum)) + Number(parseOne(currNum));
			const amount = num > 1 ? '+'.concat(num) : parseOne(num);
			const varSum = `${amount}${currChar}`;

			if (isLast) return [...previous, varSum].filter(i => !i.includes('+0') && !i.includes('-0')).join('');
			return [...previous, varSum];
		}

		if (isLast) return [...previous, current].filter(i => !i.includes('+0') && !i.includes('-0')).join('');
		return [...previous, current];
	});

	// console.log(poly)
	// console.log(terms)
	return sum[0] === '+' ? sum.substring(1) : sum;
};

const simplify = poly => {
	const getNum = term => [...term].filter(i => '+-0123456789'.includes(i)).join('');
	const getVar = term => [...term].filter(i => !'+-0123456789'.includes(i)).sort().join('');
	const parse = num => {
		switch (num) {
			case '+': return '1';
			case '-': return '-1';
			case 1: return '+';
			case -1: return '-';
			default: return num > 1 ? `+${Number(num)}` : num;
		}
	};

	// Add leading + sign: '+3a-5b'
	const exp = `${'+-'.includes(poly[0]) ? '' : '+'}`.concat(poly)
		// Add space before +- and split into terms: ['+3a', '-5ab']
		.split('').map(i => '+-'.includes(i) ? ` ${i}` : i).join('').substring(1).split(' ')

		// Reduce array into object, adding up equal variables: {x: 3, ab: -5}
		.reduce((poly, term, index, array) => {
			const isLast = index === array.length - 1;
			const char = getVar(term);
			const number = Number(parse(getNum(term)));

			const newPoly = { ...poly, [char]: number + (poly[char] || 0) };

			// If last item, convert to array: [[a, 3], [ab, -5]]
			if (isLast) return Object.entries(newPoly)
			return newPoly;
		}, {})

		// Sort terms a > c > abc > xyz
		.sort(([aChar], [bChar]) => aChar.length - bChar.length || aChar.localeCompare(bChar))

		// Filter out variables with 0 and parse +1 / -1 into + / - : ['+3a', '-5ab']
		.map(([char, num]) => !num ? '' : `${parse(num)}${char}`)

		// '+3a-5ab'
		.join('');

	// Remove leading + 
	return exp[0] === '+' ? exp.substring(1) : exp;
	// return exp.substring(exp[0] === '+');
};

console.log(simplify("-a+5ab+3a-c-2a+8"), simplify2("-a+5ab+3a-c-2a+8"));
console.log(simplify("+7b-3aby+9ayb+12b-1b-3b-3ba+9ab"), simplify2("+7b-3aby+9ayb+12b-1b-3b-3ba+9ab"));
console.log(simplify("+1xza-4xz-4xz-2zx-12x+9x+12zx-1xz+4x"), simplify2("+1xza-4xz-4xz-2zx-12x+9x+12zx-1xz+4x"));
console.log(simplify("+2axy+13y+1xy-4y+7y-3axy"), simplify2("+2axy+13y+1xy-4y+7y-3axy"));
console.log(simplify("dc+dcba"), simplify2("dc+dcba"));
console.log(simplify("2xy-yx"), simplify2("2xy-yx"));
console.log(simplify("-abc+3a+2ac"), simplify2("-abc+3a+2ac"));
console.log(simplify("xzy+zby"), simplify2("xzy+zby"));
console.log(simplify("a+2a+4a-10a"), simplify2("a+2a+4a-10a"));
console.log(simplify("a+2a+4a-8+12"), simplify2("a+2a+4a-8+12"));
console.log(simplify("2xy-4yx"), simplify2("2xy-4yx"));

/*
	Terms
	5x + 3
	Coeficient variable, constant
*/