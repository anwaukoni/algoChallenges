// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e.
//the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string
//and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

  strLower = str.toLowerCase();

  var withoutSpaces = strLower.replace(/[^a-z]+/g," ").trim().split(' ');

  if (!str.replace(/\s/g,'').length){return true};
  if (withoutSpaces.length == 1){return false};


  // for (var i = 1; i < withoutSpaces.length; i++) {
  //   var firstString = withoutSpaces[0];
  //   if(withoutSpaces.length === 0){
  //     return true;
  //   }else if(withoutSpaces.length === 1){
  //     return false;
  //   }else {
  //     if (firstString === withoutSpaces[i].split("").reverse().join("")){
  //       withoutSpaces.splice(0,1);
  //       withoutSpaces.splice(i,1);
  //       continue;
  //     }else{
  //       return false;
  //     };
  //   }
  //
  //
  // }


}

// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(' '));

module.exports = matchWord;
