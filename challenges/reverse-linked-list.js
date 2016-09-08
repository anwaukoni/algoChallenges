/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

//TODO Write test for reverse-linked-list

function Node(value) {
    this.value = value;
    this.next = null;
}

function createList(array){
  var head = new Node(array[0]);
  var tail = head;

  for (var i = 1; i < array.length; i++) {
    var new_node = new Node(array[i]);

    tail.next = new_node;
    tail = new_node;
  }

  return head;
}


function reverseLinkedList(head) {

  if (!head){
    return undefined;
  }

  if (head.next === null){
    return head;
  }

  var curr = head;
  var prev = null;
  var next;

  while (curr !== null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

return prev;
}

// function reverseLinkedList(head) {
//
//
//   var listToReverse = [];
//
//   if (!head){
//     return undefined;
//   }
//
//   if (head.next === null){
//     return head;
//   }
//
//   var curr = head;
//   // var tail;
//
//   while (curr){
//     listToReverse.push(curr.value);
//     // tail = curr;
//     curr = curr.next;
//   }
//
//   var myArray = listToReverse.reverse();
//
//
//   return createList(myArray);
//
// }


// var myLinkedList = createList([3,2,1]);
//
// console.log(reverseLinkedList(myLinkedList));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
