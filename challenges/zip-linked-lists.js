/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */


//Write tests for merging two linked lists together
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const headOne = l1;
  var currOne = headOne;
  var nodeAfterHead = currOne.next;
  var currTwo = l2;

  while (currTwo && nodeAfterHead){

      // const nextNodeInCurrOne = currOne.next;
      // const nextNodeInCurrTwo = currTwo.next;

      currOne.next = currTwo;
      currTwo = currTwo.next;
      currOne = currOne.next;

      currOne.next = nodeAfterHead;
      nodeAfterHead = nodeAfterHead.next;
      currOne = currOne.next;

      // currTwo.next = currOne.next
      // currOne.next = currTwo;
      // currTwo = nextNodeInCurrTwo;
      // currOne = nextNodeInCurrOne;
    // currOne = currOne.next;
  }
  currOne.next = currTwo ? currTwo : nodeAfterHead;
  return headOne;
};


function createLinkedList(array) {
  var head = new Node(array[0]);
  var curr = head;
  for(var i = 1; i < array.length; i++){
    curr.next = new Node(array[i]);
    curr = curr.next;
  }

  return head;
}

var listOne = createLinkedList([1,3]);
var listTwo = createLinkedList([2]);


console.log(zip(listOne,listTwo));

module.exports = {Node: Node, zip: zip};
