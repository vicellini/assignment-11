/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
// var symbolList = ["'", ",", "."]

var findLongestWord = function(testString){

  var longestWord = ''
  var testLength = 0

  var testArray = testString.split(' ');

  for(var i = 0; i < testArray.length; i++){
      if(testArray[i].length > testLength && removeSymbol(testArray[i]) === false){
        testLength = testArray[i].length;
        longestWord = testArray[i];
      }
    }
  return longestWord;
}


var removeSymbol = function(sampleTxt){
  var found = false;

  for(var j = 0; j < sampleTxt.length; j = j + 1){
    if(sampleTxt[j] === "'"){
      found = true;
    }
  }
  return found;

}

var test = removeSymbol("don't")
console.log(test)

// //Thanks again, Travis!
// function containsSymbol(symbol, arrOfSymbols){
//   var wordIsFound = false;
//   for (var i = 0; i < arrOfSymbols.length ; i++){
//     if( symbol === arrOfSymbols[i] ){
//       wordIsFound = true;
//     }
//   }
//
//   return wordIsFound
// }


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
