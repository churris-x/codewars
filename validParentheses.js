/* 
	validade parenthesis concatenation, return true / false
	() true
	)( false


*/

const validParentheses0 = string => [...string]
	.reduce((sum, current) => {
		return sum.concat(current).replaceAll('()', '')
	})

const reduceParentheses = string => [...string].reduce((sum, current) => sum.concat(current).replaceAll('()', ''));

const validParentheses = string => ![...string]
	.reduce((sum, current) => sum.concat(current).replaceAll('()', ''), '')
	// .reduce((sum, current) => sum.concat(current).replace(/\(\)/g, ''), '')
	.length;



console.log('\'\'', validParentheses(''));
console.log('()', validParentheses('()'));
console.log('())', validParentheses('())'));
console.log(')(()))', validParentheses(')(()))'));
console.log('(', validParentheses('('));
console.log(')', validParentheses(')'));
console.log('(())((()())())', validParentheses('(())((()())())'));
console.log('())(', validParentheses('())('));