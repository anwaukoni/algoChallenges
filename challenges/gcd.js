/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

//Maybe if it is not divisible by prime number then
  // var maxDivisor = 0;
  // for (var i = 1; i < Math.max(a,b); i++ ){
  //   if (a % i === 0 && b % i === 0){
  //     if (i > maxDivisor){
  //       maxDivisor = i;
  //     }
  //   }
  // }
  // return maxDivisor;

  var maxDivisor = 0;
  var num;
  for (var i = 1; i < Math.max(a,b); i++ ){
    if (a % i === num && b % i === num){
      if (num % 1 === 0 && num > maxDivisor){
        maxDivisor = num;
      }
    }
  }
  return maxDivisor;
}


console.log(gcd(5,10));



module.exports = gcd;
