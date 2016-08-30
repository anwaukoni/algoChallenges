/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

//TODO Check if this algorithm has been solved yet. If not, solve it.

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

  if (!head){
    return undefined;
  }

  if (head.next === null){
    return head;
  }
  var node = new Node(value);

  var currentNode = head;

  var count = 0;

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
