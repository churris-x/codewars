const getCount0 = word => [...word].filter(i => 'aeiou'.includes(i)).join('').length;
const getCount1 = word => [...word.toLowerCase()].filter(letter => 'aeiou'.includes(letter)).join('').length;

const getCount = word => [...word.toLowerCase()].reduce((vowels, letter) => vowels + 'aeiou'.includes(letter), 0);

console.log(getCount('abracadabra'));
console.log(getCount('e ai parceiro'));
console.log(getCount('ABRAcadabra'));
