/* 
	validade parenthesis concatenation, return true / false
	() true
	)( false


*/

const validParentheses = string => string
	.reduce((sum, current) => {
		current.replaceAll('()', '')
		return sum
	})
// .split('')


console.log('result', validParentheses('()'));
console.log('result', validParentheses(')(()))'));
console.log('result', validParentheses('('));
console.log('result', validParentheses('(())((()())())'));