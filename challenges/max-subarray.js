/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {



  var max = -Infinity;
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++){
      temp = arr[i] + arr[j+1] 
      if (temp > max ){
        max = temp;
      }
    }
  }

  return max;

}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15,20,-5,10]));
module.exports = maxSubarray;
