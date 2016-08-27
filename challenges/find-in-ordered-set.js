/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function BinarySearchTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}

function createTree(array){
  var midNode = array[Math.floor(array.length / 2)]
  var  currentNode = this.BinarySearchTree(midNode);

  for (var i = )

}

function findInOrderedSet(arr, target){
  //Use Binary Search Tree to find if a given integer is in the array

}


module.exports = findInOrderedSet;
