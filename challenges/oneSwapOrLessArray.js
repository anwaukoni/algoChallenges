//Given an array with n elements, can we sort this array in ascending order by performing only one swap operation?

// 1,2,1

function arraySwap(array){
  var temp = -1;

  for (var i = 0; i < array.length - 1; i++){
    if (array[i] > array[i+1]){
        temp = i;
        break;
    }
  }

  if (temp === -1) return true;

// && array[j+1] > array[temp]

  for (var j = temp + 1; j < array.length - 1; j++){
    console.log ('inside second for loop');
      // if (array[j] < array[temp]){

    //takes care of console.log([1,2,1,2])
    if (array[j] < array[temp] && array[j+1] >= array[temp]){
        console.log ('we are inside first statement');
        let t = array[j];
        array[j] = array[temp];
        array[temp] = t;
        break;
    } else if (j + 1 == array.length - 1) {
      console.log ('we are inside second statement');
      let t = array[j + 1];
      array[j + 1] = array[temp];
      array[temp] = t;
      break;
    }

    if (array[temp] > array[j]){
      console.log ('we are inside third statement');
      let t = array[j];
      array[j] = array[temp];
      array[temp] = t;
      break;
    }
  }


  var temp = -1;
  for (var i = 0; i < array.length - 1; i++){
    if (array[i] > array[i+1]){
        temp = i;
        break;
    }
  }

  if (temp === -1) return true;

  return false;
}

console.log(arraySwap([1,2,1]));

module.exports = arraySwap;
