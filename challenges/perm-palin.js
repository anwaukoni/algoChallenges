/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	var goingForward = [];
	var reverseString = str.split('').reverse().join('')
	var goingBackward = [];

	for (var i = 0; i < str.length; i++){
			goingForward.push(str.slice(i) + str.slice(0,i));
	}
	for (var j = 0; j < str.length; j++){
			goingBackward.push(reverseString.slice(j) + reverseString.slice(0,j));
	}
console.log("this is forward",goingForward);
console.log("this is backward",goingBackward);

	// for (var k = 0; k < goingForward.length; k++){
	// 	for (var l = goingBackward.length; l >  0; l--){
	// 		if (goingForward[k] === goingBackward[l])return true;
	// 		return false;
	// 	}
	// }
}



console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;
