var foodItems = ["pizza", "cheeseburger", "taco", "sushi", "pasta"];
var rightFood = "";
var lettersInRightFood = [];
var blankLines = 0;
var successesAndBlankLines = [];
var wrongGuesses = [];
var letterGuessed = "";

// My Counters
var guessesLeft = 10;
var wins = 0;

// starting the game

function startGame(){
    var guessesLeft = 10;
    var rightFood = foodItems[Math.floor(Math.random() * foodItems.length)];
    var lettersInRightFood = rightFood.split("");
    var blankLines = lettersInRightFood.length;
    var successesAndBlankLines = [];
    var wrongGuesses = [];

    console.log(rightFood);
    console.log(lettersInRightFood);
    console.log(blankLines);

    for (var i = 0; i < blankLines; i++) {
        successesAndBlankLines.push("__");
      }
    
    console.log(successesAndBlankLines);

    document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
    // document.getElementById("numberBlanks").textContent = successesAndBlankLines;
}
startGame();