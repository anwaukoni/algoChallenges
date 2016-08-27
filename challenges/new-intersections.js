/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *
 */

// TODO *Solve newIntersections

function newIntersections(x, y){

    var coordinates = [];
    var count = 0;

    for (var i = 0; i < x.length; i++){
      var matchingCoordinates = [];
      matchingCoordinates.push(x[i]);
      matchingCoordinates.push(y[i]);
      coordinates.push(matchingCoordinates);
    }

return coordinates;

}

var xArray = [3,2,2,0,0,3,2,-2,-2,-3,-2,-3];
var yArray = [1,2,0,1,-1,-1,-2,0,-2,1,2,-1];


console.log(newIntersections(xArray,yArray));

module.exports = newIntersections;
