/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage  = {};
  this.index = 0;
  // body...
  this.push = (value) => {

    this.storage[++this.index]= value;
    return this.index;
  };

  this.pop = ()=>{
  if (Object.keys(this.storage).length === 0){
    return undefined;
  }else{
    var toBeRemoved = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;
    return toBeRemoved;
  }
  };

  this.getMax = ()=>{
    if (Object.keys(this.storage).length === 0){
      return undefined;
    }else {
      var maxArray = [];
      var maxOne = 0;
      for (var key in this.storage){
        if (maxOne < this.storage[key]) maxOne =  this.storage[key];

      }
      return maxOne;

    }
  }

}

module.exports = Stack;
