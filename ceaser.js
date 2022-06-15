// rotate 13 chars [a-z A-Z]
// A = 60 Z = 90
// a = 97 z = 122

const rot13 = message => [...message].map(letter => {
	const l = letter.charCodeAt();
	const isUpper = (l > 59 && l < 91);
	const isLower = (l > 96 && l < 123);

	if (isUpper) return String.fromCharCode(((l - 60 + 13) % 26) + 60);
	if (isLower) return String.fromCharCode(((l - 97 + 13) % 26) + 97);
	return letter;
}).join('');


const rot13A = message => [...message].map(letter => {
	const l = letter.charCodeAt();
	const isUpper = (l > 59 && l < 91);
	const isLower = (l > 96 && l < 123);

	if (isUpper) return String.fromCharCode(((l - 60 + 13) % 26) + 60);
	if (isLower) return String.fromCharCode(((l - 97 + 13) % 26) + 97);
	return String.fromCharCode(((l - 97 + 0) % 26) + 97);
	//  return String.fromCharCode(((letter.charCodeAt() - isUpper * 60 - isLower * 97 + (isUpper || isLower) * 13) % 26) + isUpper * 60 + isLower * 97)
}).join('');



console.log(rot13('test'))
console.log(rot13('TesT23'))
