
var valuesArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
var crystalValuesArray = [];
 
//takes the valuesArray and randomizes the order, assigns this to local variable crystalValues//
crystalValues = valuesArray.sort( function() { return 0.5 - Math.random() } );

//grabs the first four numbers of the crystalValues array//
confusion = crystalValues.slice(0, 4);
console.log(confusion);

//converts the values of the crystalValues array from strings into integers//
confusionIntegers = confusion.map(Number);
console.log(confusionIntegers);