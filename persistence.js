/*
	Battle plan: 
	- [x] count digits, if > 1 return
	- [x] multiply digits, reduce
	- [x] recurse
	- [ ] count how many times

	E.g.: 
		39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
		999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
		4 --> 0 (because 4 is already a one-digit number)
*/


const persistence0 = (number, count = 0) => {
	const multiply = n => [...`${n}`].reduce((prev, curr) => prev * curr, 1 )
	const newNumber = multiply(number);

	console.log('new number', newNumber)
	
	return `${number}`.length > 1 ? persistence(newNumber, count+1) : count;
};

const persistence1 = (number, count = 0) => `${number}`.length > 1 
	? persistence([...`${number}`].reduce((prev, curr) => prev * curr, 1 ), count+1)
	: count;

const persistence = (number, count = 0) => `${number}`.length > 1 
	? persistence([...`${number}`].reduce((product, factor) => product * factor, 1 ), count + 1)
	: count;



console.log('2', persistence(2));
console.log('43', persistence(43));
console.log('999', persistence(999));
