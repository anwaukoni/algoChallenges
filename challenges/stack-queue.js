/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage  = {};
  this.length = 0;
  this.push = (value)=>{
    this.storage[++this.length] = value;
    return this.length;
  }

  this.pop = ()=>{
    if (Object.keys(this.storage).length===0) return undefined;

    var lastOut = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return lastOut;
  }
}


/**
* Queue Class
*/


function Queue() {

  this.firstStack = new Stack();
  this.secondStack = new Stack();


  this.enqueue = (value)=>{
    this.firstStack.push(value);
    return this.firstStack.length;
  }

  this.dequeue = ()=>{
    //popping from one stack and pushing to the other
    if (Object.keys(this.firstStack.storage).length===0) return undefined;
    
    while (this.firstStack.storage[this.length]){
      this.secondStack.push(this.firstStack.storage[this.length])
    }
    this.secondStack.pop();
  }

}

module.exports = {Stack: Stack, Queue: Queue};
