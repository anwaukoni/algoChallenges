const expect = require('chai').expect;
var  doublyLinkedList = require('./challenges/doubly-linked-list.js');
// const reverse-linked-list = require('./challenges/reverse-linked-list.js');


describe("doublyLinkedList", () => {
  var myLinkedList = new doublyLinkedList;
  before(()=> {
   myLinkedList.add(1);
   myLinkedList.add(2);
   myLinkedList.add(3);
   myLinkedList.add(4);
  //  myLinkedList.remove(4);
   // myLinkedList.remove(3);
   // myLinkedList.remove(2);
  //  myLinkedList.remove(1);

  });

  it("should add value 1", () => {
    expect (myLinkedList.head.val).to.eql(1);
  });

  it('should add value 2', () => {
    expect(myLinkedList.head.next.val).to.eql(2);
  });

  it('should add value 3', () => {
    expect(myLinkedList.head.next.next.val).to.eql(3);
  });

  it('should add value 4', () => {
    expect(myLinkedList.head.next.next.next.val).to.eql(4);
  });

  it ('should have tail equal to 4', ()=>{
    expect(myLinkedList.tail.val).to.eql(4);
  });

  it ('should have tail.next be equal to null', () => {
    expect(myLinkedList.tail.next).to.eql(null);
  });

  it ('should have previous to tail be 3', ()=>{
    expect(myLinkedList.tail.prev.val).to.eql(3);
  });

  it ('should have previous to 3 be 2', ()=>{
    expect(myLinkedList.tail.prev.prev.val).to.eql(2);
  });

  it ('should have previous to 2 be 1', ()=>{
    expect(myLinkedList.tail.prev.prev.prev.val).to.eql(1);
  });

  it ('should have previous to 1 be null', ()=>{
    expect(myLinkedList.tail.prev.prev.prev.prev).to.eql(null);
  });

});


/*"test": "export COHORT=7; node test/run-tests.js",*/
