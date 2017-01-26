
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(testArray){
  var bigNumber = 0;
  var testNumber = 0;
  for(var i = 0; i < testArray.length; i++){
    if(testArray[i] > testNumber){
      testNumber = testArray[i];
      bigNumber = testArray[i];
    }
  }
return bigNumber;
}


console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
