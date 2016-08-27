// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  for (var i = 0; i < array.length; i++) {
    var temp = array[i];

    for (var j = i-1 ; j >= 0; j--) {
      if (temp < array[j]){

        array[j+1] = array[j];
        array[j] = temp;

      }else{
        continue;
      }
    }
  }
  return array;
}

// console.log(insertionSort([3,38,45,7,5]));

module.exports = insertionSort;
