
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

var hasDoubleLetters = function(testString){
  var doubleLetter = false;
  var uniform = testString.toLowerCase();
  for(var i = 0; i < uniform.length; i++){
    if(uniform[i] === uniform[i-1])
    doubleLetter = true;
    }
    return doubleLetter;

  }


console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
