//-Inform 3 numbers to the computer
//-each number will represent one of the options (rock, paper or scissors).
//-make the computer choose these numbers at random.
//-when the computer chooses it, make it appear on the console as the name of the option chosen.
//-once it is working, make sure it doesn't output any values anymore

function getComputerChoice () {
    let choiceMade = Math.floor(Math.random() * 3);

    if (choiceMade == 0) {
    choiceMade = "Rock"

    } else if (choiceMade == 1) {
        choiceMade = "Paper";

    } else if (choiceMade == 2) {
        choiceMade = "Scissors";
    }

    return;
}

//-Make the player's input match one of the values, either by string or numbers. 
//-once both parameters (computer's choice and player's choice) are evaluated, check the result.
//-Explain/output the result of the round with a simple "you win/you lose"
//-Make it recursive, so the player doesn't have to refresh the browser


var playerSelection = "Paper";
var computerSelection = getComputerChoice(); 

function startRound (playerSelection, computerSelection) {
    var roundResult = "";
    
    if (playerSelection == "Paper" && computerSelection == 2) {
        roundResult = "Player lost. Scissors cut Paper";
        console.log(roundResult) //debugging
    } else if (playerSelection == "Paper" && computerSelection == 1) {
        roundResult = "Draw. Try again!";
        console.log(roundResult)  //debugging
    } else if (playerSelection == "Paper" && computerSelection == 0) {
        roundResult = "Player won! Paper covers Rock";
        console.log(roundResult) //debugging
    }

    console.log(roundResult);
    return roundResult;
} 

console.log ("before startRound is executed"); //debugging 
startRound(playerSelection, computerSelection);
getComputerChoice();