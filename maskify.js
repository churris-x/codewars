const maskify0 = input => input.length < 4 ? input : '#'.repeat(input.length - 4).concat(input.substring(input.length - 4));

const maskify1 = input => {
	const len = input.length;
	if (len < 4) return input;
	return '#'.repeat(len - 4).concat(input.substring(len - 4));
};

const maskify = input => input.slice(-4).padStart(input.length, '#');

const maskifyB = (input, char) => input.slice(-4).padStart(input.length, char || '*');

console.log(maskify('ld'))
console.log(maskify('4556364607935616'))