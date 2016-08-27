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


function modemean(array) {

	//mode is the number that is repeated the most times

	
	var modeStorage = {};
	var modeVal= []; 
	var len = array.length; 
	var mean = Math.floor(array.reduce(function(a,b){
		return a + b; 
	})/len);

	for (var i = 0; i < len; i++) {
		 if(!modeStorage[array[i]]){
		 	 modeStorage[array[i]] = 0;		
		 }
       	modeStorage[array[i]]++;
	    
	};

	var key = Object.keys(modeStorage).reduce(function(a,b){
		if (modeStorage[a] > modeStorage[b]){
			return a
		} else {
			return b; 
		}
	});

	if(mean == key){
		return true; 
	}else{
		return false;
	}

}


// console.log(modemean([1])); 
module.exports = modemean;
