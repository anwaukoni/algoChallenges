//TODO refactor this code to be better. Look at opensignal algos for inspiration

 /* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n){

	var output="";
	var space =[];
	var results= "";
	count = n;

	for (var i = 0; i < n; i++){
		output += "*";
		space += " ";
	}
	for (var j = 0; j < n; j++){
		results += space.substring(0,count-1);
		results += output.substring(0,j+1);

		if (j < n-1 ){
			results += "\n";
		}

		count --;

	}
	console.log(results);
}

drawStairs(10);

module.exports = drawStairs;
