/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/


//TODO *Solve Pascal's Triangle recursively

function pascalTriangle(numRows) {

  var totalRows = [[1],[1,1]];
  var firstRow = []
  var lastTotal;

  if (numRows === 0) return undefined;
  if (numRows === 1) {
    totalRows.splice(1);
    return totalRows
  }
  if (numRows === 2) return totalRows;

  for (var i = 2; i < numRows; i++){
    newRows = [];
    lastTotal = totalRows[totalRows.length - 1];
    for (var j = 0; j < lastTotal.length-1; j++){

      newRows.push(lastTotal[j] + lastTotal[j+1]);
    }

    newRows.unshift(1);
    newRows.push(1);
    totalRows.push(newRows);
  }

  return totalRows;

}

//Do it recursively too
// function pascalTriangleRecursively(numRows){
//
// }


module.exports = pascalTriangle;
