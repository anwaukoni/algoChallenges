/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  
  //solution 2
  va r obj=

  var sortedArr = array.sort(function(a,b){ return a - b;});

  // return sortedArr;

  sortedArr.reduce(function(a,b){
    if (a == b){
      return a;
    }else{
      return false;
    }
  })
//
//Doing it in 0(n)
//
// for(i = 0; i < array.length; i++){
//     for (var j = 1; j < array.length; j++) {
//       if (array[i]===array[j]){
//         return array[j];
//       }
//     }
//   }
//   return false;


//Doing it in 0(1)
// return array.join('').match(/(\d{2})/);

}


console.log(repeatNumbers([3,1,4,1,5]));
console.log(repeatNumbers([5,3,4,1,4]));
console.log(repeatNumbers([3,3,4,1,5]));
module.exports = repeatNumbers;
