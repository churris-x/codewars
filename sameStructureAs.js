// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.

Array.prototype.sameStructureAs = function (other) {

	const check = array => array.map(i => Array.isArray(i) ? `(${check(i)})` : '0').join('');
	return check(this) === check(other);
};



console.log([1, 1, [3, 3]].sameStructureAs([2, 2, [4, 3]]));
console.log([1].sameStructureAs([[1]]));
console.log([1, 3, 4, [3, [34, 23, [84]]]].sameStructureAs(1));