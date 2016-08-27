/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {

  var sortedMeetingTimes = array.sort(function(a,b){
    return a[0] - b[0];
  });

  var results = [];

  for(var i = 0; i < sortedMeetingTimes.length; i++){
    if(sortedMeetingTimes[i+1][0] > sortedMeetingTimes[i][0]
      && sortedMeetingTimes[i+1][0] < sortedMeetingTimes[i][1])
      {
        sortedMeetingTimes[i].concat(sortedMeetingTimes[i+1]);
      }

      results.push(sortedMeetingTimes[i]);
  }


  return results;


}
console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))

module.exports = mergeRanges;
