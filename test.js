const expect = require('chai').expect;
var  doublyLinkedList = require('./challenges/doubly-linked-list.js');  

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

  it("should have next node after head be equal to 4 after removing node(3)", ()=>{
    myLinkedList.remove(3);
    expect(myLinkedList.head.next.val).to.eql(4);
  });

  it("should have value previous to 4 be equal to 2", ()=>{
    expect(myLinkedList.tail.prev.val).to.eql(2);
  });


  it("should have tail value be equal to 2 after removing tail", ()=>{
    myLinkedList.remove(4);
    expect(myLinkedList.tail.val).to.eql(2);
    // console.log(myLinkedList);
  });

  it('should have tail and head be equal to null if last node is removed from list', () => {
    myLinkedList.remove(2);
    console.log(myLinkedList);
    expect(myLinkedList.head).to.eql(null);
    expect(myLinkedList.tail).to.eql(null);
  });

});
