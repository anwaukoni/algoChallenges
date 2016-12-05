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


	const modeStorage = {};
	const modeVal= [1,2,3,4];
	const len = array.length;

	if (array.length === 0){
		return undefined;
	}

	const mean = Math.floor(array.reduce(function(a,b){
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

	const key = Object.keys(modeResult).reduce(function(a,b){
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

module.exports = modemean;
