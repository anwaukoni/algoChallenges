/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
//TODO add edge cases plus test

function modemean(array) {

	//mode is the number that is repeated the most times


	var modeStorage = {};
	var modeVal= [];
	var len = array.length;
	var mean = Math.floor(array.reduce(function(a,b){
		return a + b;
	})/len);

	const modeReducer = (tally, number)=>{
		if(!tally[number]){
			tally[number] = 1;
		}else {
			tally[number] = tally[number] + 1;
		}

		return tally;
	}

	const modeResult = array.reduce(modeReducer, modeStorage);

	var key = Object.keys(modeResult).reduce(function(a,b){
		if (modeResult[a] > modeResult[b]){
			return a
		} else {
			return b;
		}
	});

	const mode = parseInt(key);

	if(mean === mode){
		return true;
	}else{
		return false;
	}

}


console.log(modemean([1,1,1,1,1,2,100]));
module.exports = modemean;
