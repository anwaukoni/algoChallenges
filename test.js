//TODO add remove function for doubly linked lust

const expect = require('chai').expect;
var  doublyLinkedList = require('./challenges/doubly-linked-list.js');

// const myLinkedList = new doublyLinkedList;

describe("add method to doublyLinkedList", () => {
  const myLinkedList = new doublyLinkedList;
  before(()=> {
   myLinkedList.add(1);
   myLinkedList.add(2);
   myLinkedList.add(3);
   myLinkedList.add(4);
  });


  it("should have head equal to value 1", () => {
    expect (myLinkedList.head.val).to.eql(1);
  });

  it('should add new node(2)', () => {
    expect(myLinkedList.head.next.val).to.eql(2);
  });

  it('should add new node(3)', () => {
    expect(myLinkedList.head.next.next.val).to.eql(3);
  });

  it('should add new node(4)', () => {
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

  it ('should have previous to head be null', ()=>{
    expect(myLinkedList.tail.prev.prev.prev.prev).to.eql(null);
  });

});
// console.log(myLinkedList);

describe('remove method from doubly linked list', () => {
  //use remove method from doubly linked list
  const myLinkedList = new doublyLinkedList;
  before(()=>{
     myLinkedList.add(1);
     myLinkedList.add(2);
     myLinkedList.add(3);
     myLinkedList.add(4);
  });

  it("should have new head with value 2 after removing initial head", ()=>{
    myLinkedList.remove(1);
    expect(myLinkedList.head.val).to.eql(2);
  });

  it("should have next node after head be equal to 4", ()=>{
    myLinkedList.remove(3);
    console.log(myLinkedList);
    expect(myLinkedList.head.next.val).to.eql(4);
  });

  it("should have value before 4 be equal to 2", ()=>{
    expect(myLinkedList.tail.prev.val).to.eql(2);
  });

});


/*"test": "export COHORT=7; node test/run-tests.js",*/
