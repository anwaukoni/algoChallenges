/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 				stringRotation('hello', hlloe) -> false
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	var sortOne = s1.split('').sort().join(''); 
	var sortTwo = s2.split('').sort().join('');


	// if (sortTwo.length === sortOne.length){
	// 	if(isSubstring(sortOne[0],sortTwo[0])){
	// 		return true; 
	// 	}
		
	// // }


	// return false; 
	
	for (var i = 0; i < Math.max(sortOne.length, sortTwo.length); i++) {
		if (!isSubstring(sortOne[i],sortTwo[i])){
			return false; 
		}	
	}	

	return true; 
}

// console.log(stringRotation("hello", "he")); 

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
