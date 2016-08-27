/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/



// TODO - Refactor Code as it doesn't work fully

function poker(hand1, hand2) {
  var handRank1 = {};
  var handRank2 = {};

  for (var i = 0; i < hand1.length; i++){
    handRank1[hand1[i]] = handRank1[hand1[i]] + 1 || 1;
    handRank2[hand2[i]] = handRank2[hand2[i]] + 1 || 1;
  }

  handRank1Array = [];
  handRank2Array = []

  for (var key in handRank1){
    handRank1Array.push([key, handRank1[key]]);
  }

  for (var key in handRank2){
    handRank2Array.push([key, handRank2[key]]);
  }

  // return handRank1Array;
  var sortedArrayOne = handRank1Array.sort(function(a, b){
    return a[1] - b[1];
  }).reverse();

  var sortedArrayTwo = handRank2Array.sort(function(a, b){
    return a[1] - b[1];
  }).reverse();


  if (sortedArrayOne[0][1] > sortedArrayTwo[0][1]){
    return "Player 1 Wins";
  }

  if (sortedArrayOne[0][1] === sortedArrayTwo[0][1]){
    if(parseInt(sortedArrayOne[0][0]) > parseInt(sortedArrayTwo[0][0])){
      return "Player 1 Wins";
    }

    if(parseInt(sortedArrayOne[0][0]) === parseInt(sortedArrayTwo[0][0])){

      if (sortedArrayOne[1][1] > sortedArrayTwo[1][1]){
        return "Player 1 Wins";
      }

      if (sortedArrayOne[1][1] === sortedArrayTwo[1][1]){

        if (parseInt(sortedArrayOne[1][0]) > parseInt(sortedArrayTwo[1][0])){
          return "Player 1 Wins";

        }

        if (parseInt(sortedArrayOne[1][0]) === parseInt(sortedArrayTwo[1][0])){

          if (sortedArrayOne[2][1] > sortedArrayTwo[2][1]){
            return "Player 1 Wins";
          }

          if (sortedArrayOne[2][1] === sortedArrayTwo[2][1]){
            if (parseInt(sortedArrayOne[2][0]) > parsetInt(sortedArrayTwo[2][0])){
              return "Player 1 Wins"

            }
            if (parseInt(sortedArrayOne[2][0]) === parsetInt(sortedArrayTwo[2][0])){
              return "Split Pot"

            }

          }
        }
      }
    }



  }


  return "Player 2 Wins"

}


// console.log(poker([10,10,2,3,5],[5,5,4,4,2]));

module.exports = poker;
