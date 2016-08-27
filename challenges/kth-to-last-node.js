/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
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

function kthToLastNode(k, head) {
  var linkedLength = 0;
  var curr = head;


  while(curr !== null && curr !== undefined){

    curr['count'] = linkedLength;
    linkedLength ++;
    curr = curr.next;
  }

  while(head !== null && head !== undefined){
    if (head.count === linkedLength - k){
      return head.value;
    }
    head = head.next;
  }

  return undefined;
}

// var myList = createList(['A','B','C','D','E']);

// console.log(createList(['A','B','C','D','E']));

// console.log(kthToLastNode(7,myList));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
