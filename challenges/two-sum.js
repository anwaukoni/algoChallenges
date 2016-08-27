/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  for (var i = 0; i < arr.length; i++){
    for (var j = 1; j < arr.length; j++){
      if (arr[j] + arr[i] === n){
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1],2));

module.exports = twoSum;
