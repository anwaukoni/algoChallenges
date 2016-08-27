/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function Node(value){
  this.value = value;
  this.next = null;
}

function createList (array){
  var head = new Node(array[0]);
  var tail = head;
  for (var i = 1; i < array.length; i++){
      tail.next = new Node(array[i]);
      tail = tail.next;
  }
  return head;
}

function deleteDups(head) {
  var linkedObject = {};
  var curr = head;
  var prev;

  while (curr !== null && curr !== undefined){

      if(linkedObject[curr.value]){
        prev.next = curr.next;
      }else {
        linkedObject[curr.value] = true;
        prev = curr;
      }

      curr = curr.next

  }

  return head;
}


// var myList = createList([1,3,3,3,2]);
//
// console.log(deleteDups(myList));

module.exports = deleteDups;
