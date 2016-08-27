// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

for (var j = array.length - 1; j > 0; j--){
  for (var i = 0; i < j; i++){
    var temp = array[i + 1];
    if (array[i] > array[i+1]){
      array[i+1] = array[i];
      array[i] = temp;
    }
  }
}
  return array;
}

console.log(bubbleSort([3,44,38,5,47,15]));
module.exports = bubbleSort;
