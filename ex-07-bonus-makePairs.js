/** ! Adventure Mode !
 * Ex : makePairs()
 *
 * Write a function called makePairs that takes an array of values and
 * returns an an array of pair-arrays.
 *
 * e.g. makePairs(['hi','hello', 'howdy', 'greetings'])
 *       => [ ['hi', 'hello'] , ['howdy', 'greetings'] ]
 *
*/
 var makePairs = function(someArray){
   var superArray = []
   var smallArray = []
   for(var i = 0; i < someArray.length; i++){
     console.log(someArray[i])
     if(smallArray.length < 2){
       smallArray.push(someArray[i]);
     }
     if(smallArray.length === 2){
         superArray.push(smallArray);
         console.log('the pair', smallArray);
         console.log('the output', superArray);
         smallArray = []
     }
    }

    return superArray
   }






var pairsOutput = makePairs([10,20,30,40,50,60,70,80])
//=> [ [10,20], [30,40], [50,60], [70,80] ]

var firstPair = pairsOutput[0];
var thirdPair = pairsOutput[2];

console.assert(pairsOutput.length === 4)
console.assert(firstPair.length === 2)
console.assert(firstPair[0] === 10)
console.assert(firstPair[1] === 20)
console.assert(thirdPair[0] === 50)
console.assert(thirdPair[1] === 60)
