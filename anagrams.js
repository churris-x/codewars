const anagrams0 = (word, variations) => {
	const sortWord = [...word].sort().join('');
	return variations.filter(a => a !== word && [...a].sort().join('') === sortWord);
};

const anagrams = (word, variations) => variations.filter(a => a.length === word.length && [...a].sort().join('') === [...word].sort().join(''));

const anagrams2 = (word, variations) => {
	const sortWord = [...word];

	for (const letter of sortWord) {

	}
	return variations.filter(a => a !== word && [...a].sort().join('') === sortWord);
};

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));