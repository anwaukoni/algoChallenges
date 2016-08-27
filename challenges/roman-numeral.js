/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  var output = "";
  var output5= "V"

  for (var i = 1; i <= n; i++) {
    if ( n < 4) {
      output += "I";
    }

    if (i > 3 && n === 4) {
      output += "IV";
    }

    // if (i > 4 && n === 5) {
    //   output += "V";
    // }

    if (i > 5 && n < 9) {
        output5 += "I";
    }
  }

return output5;
  // return output.length ? output : output5;
}

console.log(romanNumeral(8));
module.exports = romanNumeral;
