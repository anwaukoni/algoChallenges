const expect = require('chai').expect;
var  doublyLinkedList = require('./challenges/doubly-linked-list.js');
var modemean  = require ('./challenges/mode-mean.js');
var commonElements = require ('./challenges/common-elements.js');
var arraySwap = require ('./challenges/oneSwapOrLessArray.js');

describe ("doubly linked list add method", () => {
  const myLinkedList = new doublyLinkedList;
  before(()=> {
   myLinkedList.add(1);
   myLinkedList.add(2);
   myLinkedList.add(3);
   myLinkedList.add(4);
  });


  it ("should have head equal to value 1", () => {
    expect (myLinkedList.head.val).to.eql(1);
  });

  it ('should add new node(2)', () => {
    expect(myLinkedList.head.next.val).to.eql(2);
  });

  it ('should add new node(3)', () => {
    expect(myLinkedList.head.next.next.val).to.eql(3);
  });

  it ('should add new node(4)', () => {
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

describe('doubly-linked list remove method', () => {
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
  });

  it('should have tail and head be equal to null if last node is removed from list', () => {
    myLinkedList.remove(2);
    expect(myLinkedList.head).to.eql(null);
    expect(myLinkedList.tail).to.eql(null);
  });

});

describe ("modemean function", () => {

  it ('should give undefined when the array is empty', ()=>{
    expect(modemean([])).to.eql(undefined);
  });

  it ('should be true when mode equals mean', () => {
    expect(modemean([0,0,0,0,0])).to.eql(true);
    expect(modemean([1,1,1,1,1])).to.eql(true);
    expect(modemean([11111,11111,11111,11111,11111])).to.eql(true);
  });

  it ('should be false when mode does not equal mean', () => {
    expect(modemean([1,1,1,1,1,2,100])).to.eql(false);
    expect(modemean([20,30,40,50])).to.eql(false);
    expect(modemean([100,100,300,500,600])).to.eql(false);
  });

});

describe ("common-elements function",() => {
  let array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  let array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  let array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  let array4 = ['ferret',12,12,45,9,66,77,78,2000];

  it ("should return an array with the common elements of four arrays", () => {
    expect(commonElements(array1, array2, array3, array4)).to.eql([12, "ferret"])
  });

  it ("should return \"Nothing in Common!\"", () => {
    let array4 = [45,66,77,78,2000]
    expect(commonElements([],[],[],[])).to.eql("Nothing in Common!");
    expect(commonElements(array1, array2, array3, array4)).to.eql('Nothing in Common!');
  });
});

describe.only("oneSwaporLessArray function", () => {

  it ('should return true when the array is empty', () => {
    expect(arraySwap([])).to.eql(true);
  });

  it ('should be true when the array already comes sorted', () => {
    expect (arraySwap([1,2,3,4,5])).to.eql(true);
    expect (arraySwap([1,1,1,1])).to.eql(true);
    expect (arraySwap([1,2])).to.eql(true);
  });

  it ('should be true with the following unsorted elements number in the array', () => {
    expect (arraySwap([1,2,1])).to.eql(true);
    expect (arraySwap([1,2,1,2])).to.eql(true);
    expect (arraySwap([1,3,5])).to.eql(true);
    expect (arraySwap([1,5,3])).to.eql(true);
    expect (arraySwap([1,4,5,6,7,2])).to.eql(true);
  });

  it ('should be false with the following unsorted elements in the array', () => {
    expect (arraySwap([1,3,6,3,5,5,3,7,7])).to.eql(false);
    expect (arraySwap([1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,123,124,1245566778])).to.eql(false);
    expect (arraySwap([1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,2,123,124,1245566778])).to.eql(false);
  });
});
