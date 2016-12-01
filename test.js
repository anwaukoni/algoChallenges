const expect = require('chai').expect;
var  doublyLinkedList = require('./challenges/doubly-linked-list.js');
// const reverse-linked-list = require('./challenges/reverse-linked-list.js');


describe(doublyLinkedList, () => {
  before(()=> {
  var myLinkedList = new LinkedList;
   myLinkedList.add(1);
   myLinkedList.add(2);
   myLinkedList.add(3);
   myLinkedList.add(4);
  //  myLinkedList.remove(4);
   // myLinkedList.remove(3);
   // myLinkedList.remove(2);
  //  myLinkedList.remove(1);

})

  it("should add value 1", () => {
    expect (myLinkedList.head.val).to.eql(1);
  });

  // it("should have no value 1", () => {
  //   expect(myLinkedList.head.val).to.eql(1);
  // });
});


/*"test": "export COHORT=7; node test/run-tests.js",*/
