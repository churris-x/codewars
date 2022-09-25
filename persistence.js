/*
	Battle plan: 
	- [x] count digits, if > 1 return
	- [x] multiply digits, reduce
	- [ ] meta reduce?	

	E.g.: 
		39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
		999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
		4 --> 0 (because 4 is already a one-digit number)
*/


const persistence = number => [...`${number}`].reduce((prev, curr) => prev * curr, 1 );

console.log('2', persistence(2));
console.log('43', persistence(43));
console.log('999', persistence(999));
