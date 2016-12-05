// TODO Add tests for this file to the test.js

/*
Create a doubly linked list with an add and remove method
 */


function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}


/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (this.head === null ){
    this.head = new Node(val);
    this.tail = this.head;
  }else{
    var prev = this.tail;
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.tail.prev = prev;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var curr = this.head;

  while (curr !== null && curr !== undefined){

    if (curr.val === val){
      var nodeBeforeCurr = curr.prev;
      var nodeAfterCurr = curr.next;

      // if it is a middle node do something
      if (nodeBeforeCurr && nodeAfterCurr){
        nodeBeforeCurr.next = nodeAfterCurr;
        nodeAfterCurr.prev = nodeBeforeCurr;
      }

      //if just head node restructure so theres is a new head node
      if (nodeAfterCurr && nodeBeforeCurr === null){
        this.head = nodeAfterCurr;
        nodeAfterCurr.prev = null;
      }

      //if just tail node restructure so there is a new tail node
      if (nodeBeforeCurr && nodeAfterCurr === null){
        this.tail = nodeBeforeCurr;
        nodeBeforeCurr.next= null;
      }

      //if  just a singular node in the linked list
      if (nodeBeforeCurr === null && nodeAfterCurr === null){
        this.head = null;
        this.tail = null;
      }
    }

    curr = curr.next;
  }
};

// var myLinkedList = new LinkedList;
// myLinkedList.add(1);
// myLinkedList.add(2);
// myLinkedList.add(3);
// myLinkedList.add(4);
// myLinkedList.remove(4);
// // myLinkedList.remove(3);
// // myLinkedList.remove(2);
// myLinkedList.remove(1);




// console.log(myLinkedList);

module.exports = LinkedList;
