/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  var biggestPower = [1,2,4,8,16,32,64,128]
  var binary = binary.split('').reverse().join('');
  var output = 0;

  for (var i = 0; i < binary.length; i++) {
    if(binary[i] === "1"){
      output += biggestPower[i];
    }else{
      output += 0;
    }
  }
  return output;
}

function decToBin(decimal){

  var biggestPower= [1,2,4,8,16,32,64,128]
  var output = "";

  if (decimal === 0){
    return output;
  }

  for (var i = 0; i < biggestPower.length; i++){

    if (decimal > biggestPower[i]){
      "0".concat(output);
    }else{
      "1".concat(output);
      return decToBin(biggestPower[i] % decimal)
    }





    if (decimal % biggestPower[i] === 0){
      //return something;
    }else{
      return decToBin (decimal % biggestPower[i]);
    }

  }
  return output;
}

console.log(decToBin(5));
console.log(decToBin(20));
console.log(decToBin(35));

module.exports = binToDec;
