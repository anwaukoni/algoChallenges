/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

//TODO Need to check for if theyre are negatives

  var sortedArray = array.sort(function(a,b){
    return a - b;
  });

  if (!aaray || array.length < 3){return 0};

  var lastThree = sortedArray.splice(array.length - 3);

  return lastThree.reduce(function(a,b){
    return a * b;
  });
}

// console.log(highestProduct([1,2,2,3,5,6]));
// console.log(highestProduct([5,6]));


module.exports = highestProduct;
