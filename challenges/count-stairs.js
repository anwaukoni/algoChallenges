/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

// TODO *Solve countStairs

function countStairs(n) {
  var steps;
  if(n % 2 === 0){
    steps = n / 2;
    return steps
  }else{
    steps = (n/2) + 1;
    return steps;
  }
}

module.exports = countStairs;
