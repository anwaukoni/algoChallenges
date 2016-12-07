// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  var array4 = ['ferret',12,12,45,9,66,77,78,2000];

  // [];

  // ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// TODO find commmon elements and write tests for this

function commonElements(array1, array2, array3, array4){

  if (array1.length === 0 ||
      array2.length === 0 ||
      array3.length === 0 ||
      array4.length === 0
  )
  {
    return "Nothing in Common!";
  }

  const createUniqueArray = function(array){
    const sortedArray = array.sort((a,b)=>{
      return a - b ;
    });
    const uniqueArrayResults = [];
    let temp;
    for (let i = 0; i < array.length; i++){
      if (array[i] !== temp){
        temp = array[i];
        uniqueArrayResults.push(array[i]);
      }
    }

    return uniqueArrayResults;
  }

  const uniqueArrayOne = createUniqueArray(array1);
  const uniqueArrayTwo = createUniqueArray(array2);
  const uniqueArrayThree = createUniqueArray(array3);
  const uniqueArrayFour = createUniqueArray(array4);

  const comparisonDictionary = {};
  var results = [];

  var createDictionary = (tally, count) => {
    if (!tally[count]){
      tally[count] = 1;
    }else{
      tally[count] = tally[count]  + 1;
    }

    return tally;
  }

  const reduceArrayOne = uniqueArrayOne.reduce(createDictionary, comparisonDictionary);
  const reduceArrayTwo = uniqueArrayTwo.reduce(createDictionary, reduceArrayOne);
  const reduceArrayThree = uniqueArrayThree.reduce(createDictionary, reduceArrayTwo);
  const reduceArrayFour = uniqueArrayFour.reduce(createDictionary, reduceArrayThree);

  for (key in reduceArrayFour){
    if (reduceArrayFour[key] === 4){
      if (typeof parseInt(key) === 'number'){
        results.push(parseInt(key));
      }

      // else{
      //   results.push(key);
      // }
    }
  }

  if (results.length > 0){
    return results;
  }else {
    return "Nothing in Common";
  }

}


console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
