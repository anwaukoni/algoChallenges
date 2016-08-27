/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unique integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  var myObj = {};

  if (array.length  === 0){
    return undefined;
  }

  var countInt = array.forEach(function(a){
     myObj[a] = myObj[a] ? myObj[a] + 1 : 1
  });

  for (var key in myObj){
    if (myObj[key] === 1){
      return key;
    }
  }
  return false;

//2nd solution
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}


// console.log(uniqueNumber([1,2,2,3,3]));



module.exports = uniqueNumber;
