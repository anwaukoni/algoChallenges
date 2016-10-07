/*
  The equilibrium index of a sequence is an index such that the sum of elements
  at lower index is equal to the sum of elements at higher indexes.
  Ex: A= [-7,1,5,2,-4,3,0]

  A[0]+A[1]+A[2] === A[4]+A[5]+A[6]

  array = [500, -1, 1]
  upperSum = 500
  lowerSum = 0

  equilibriumIdx = 0
  upperSum = upperSum - 500
  upperSum = 0
  upperSum === lowerSum
  done, return 0

  //Assume sum of zero elements === 0
*/


const searchEquilibriumIndex = array => {
  if (!array || array.length === 0) return undefined;

  let lowerSum = 0;
  let upperSum = array.reduce((a,b) => a + b );

  for (let equilibriumIdx = 0; equilibriumIdx < array.length; equilibriumIdx++){

    upperSum -= array[equilibriumIdx];

    if (lowerSum === upperSum) {
      return equilibriumIdx;
    }

    lowerSum += array[equilibriumIdx];
  }

  return -1;
}


// console.log(searchEquilibriumIndex([-7,1,5,2,-4,3,0]));
//
// console.log(searchEquilibriumIndex([-28,1,2,3,4,5,6,7,500]));
