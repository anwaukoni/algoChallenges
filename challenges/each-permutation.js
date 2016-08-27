/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array. Permutations must not repeat any of the array elements.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

// TODO *do each permutation

function eachPermutation(arr, callback) {

  if (arr.length === 1){
    return arr[0];
  }else if(arr.length === 0){
    return undefined;
  }

  for (var i = 0; i < arr.length; i++){

  }
}



module.exports = eachPermutation;
