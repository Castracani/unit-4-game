
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

//assigns the integer values previously gotten to the crystal images//






















//Global Variables//

wins = 0;
losses = 0;
var valuesArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];





//FUNCTONS//


//start-up game function//
***create function with name of locally defined variable in parentheses***
/* function startUp(randomValues, randomWinNumber)*/


generates 4 random numbers from a pre-determined list (1 - 12) [for loop?]

assign the four gotten numbers to a locally defined variable
assigns these numbers to the crystals (first crystal gets first number, etc.)

assign a variable as an operation to generate a random number to be determined as the winning number (19 - 120)
insert that number into the #RandomNumDiv container

set number in #scoreDiv to zero





//on-click function//
defined for clicking the four crystals
clicking the crystal will increase the points total in the #scoreDiv
conditionals from here

if (point value equals the randomly-generated winning number)
increase wins variable by 1    
insert text into #gameStateText saying "You won!!"
run startUp function

else if ([point value exceeds the randomly-generated winning number])
    increase losses variable by 1
    insert text into #gameStateText saying "You Lose!!"
    run startUp function




