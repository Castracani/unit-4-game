//Global Variables//

var wins = 0;
var losses = 0;
var currentScore = 0;
var winningNumber;
var valuesArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];


//passing variables into the HTML content//

$("#wins").html(wins);
$("#losses").html(losses);




//FUNCTONS//

//------------------------------------------------------------------------------------------------------------//

/*start-up game function
I know I need a callback function to be implemented here to pass on these values to other functions...
but I'm unsure how to do that.*/
function startUp() {

//takes the valuesArray and randomizes the order, assigns this to local variable crystalValues//
crystalValues = valuesArray.sort( function() { return 0.5 - Math.random() } );

//grabs the first four numbers of the crystalValues array//
pulledCrystalValues = crystalValues.slice(0, 4);

//converts the values of the crystalValues array from strings into integers//
//pulledCrystalIntegers = pulledCrystalValues.map(Number);
//console.log(pulledCrystalIntegers[0]);

// do I need to create a parameter to manipulate the score for the on-click function? Not sure//


/*assigns these numbers to the crystals (first crystal gets first number, etc.)
I'm sure this can be done with a for loop, 
but I'm unsure how to implement it... so I'll simply type out everything.
for (i = 0; i < pulledCrystalIntegers.length; i++) {
} to begin... but don't know where to go from there?*/

 $("#crystal0").attr("data-crystalValue",pulledCrystalValues[0]);
 $("#crystal1").attr("data-crystalValue", pulledCrystalValues[1]);
 $("#crystal2").attr("data-crystalValue", pulledCrystalValues[2]);
 $("#crystal3").attr("data-crystalValue", pulledCrystalValues[3]);


//assign a variable to generate a random number to be determined as the winning number (19 - 120)//
winningNumber = Math.floor(Math.random() * 102) + 19;

//insert winningNumber into #randomNumberDiv container//
$("#randomNumberContainer").html(winningNumber);


//set the number in #scoreDiv to zero//
currentScore = 0;
$("#score").html(currentScore);

}

//-----------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------/

//on-click function//
 
//create a function that runs when clicking any of the crystal images//
$(".crystalImg").on("click", function () { 
    /*taking the winningNumber variable from the startUp function
    and passing it to this function*/
    // winningNumber = finalScore;

    /*clicking the crystal will increase the points total by whatever number was
    assigned to each crystal*/
    var randomlyGeneratedCrystalValue = ($(this).attr("data-crystalValue"));

    //every click adds to the score//
    currentScore += parseInt(randomlyGeneratedCrystalValue);
    $("#score").html(currentScore);

    /*if point value equals the winning number, increase wins variable by 1,
    insert text into #gameStateText saying "You won!!",
    run startUp function*/

    if (currentScore === winningNumber) {
        wins++;
        $("#wins").html(wins);
        $("#gameStateText").html("You won!! <br />");
        startUp();
    }
    
    /*else if, point value exceeds the winning number, increase losses variable by 1,
    insert text into #gameStateText saying "You lost!!",
    run startUp function*/
    else if ( currentScore > winningNumber) {
        losses++;
        $("#losses").html(losses);
        $("#gameStateText").html("You lost!! <br />");
        startUp();
    }

});

startUp();


