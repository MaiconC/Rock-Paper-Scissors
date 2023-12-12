let roundWinner = ``;
let playerScore = 0;
let computerScore = 0;


do {
    let playerSelection = getPlayerChoice() 
    let computerSelection = getComputerChoice ()
    console.log(`You chose: ${playerSelection}`);
    console.log(`The computer chose: ${computerSelection}`); 
    console.log(game(playerSelection, computerSelection))  
}

while (!endGame())

console.log("Game Over!");
console.log(`The final score is ${playerScore} points for you against the computer's score of ${computerScore}`)
if (playerScore == 5) {
    console.log(`Congratulations, you've won!`);
}
else {
    console.log(`You lost. Good luck next time!`)
}

function endGame () {
    return playerScore === 5 || computerScore === 5;
}

function getComputerChoice () {
    let choiceMade = Math.floor(Math.random() * 3);
    
    if (choiceMade == 0) {
    choiceMade = "Rock"

    } else if (choiceMade == 1) {
        choiceMade = "Paper";

    } else if (choiceMade == 2) {
        choiceMade = "Scissors";
    }

    return choiceMade;
}

function getPlayerChoice () {
    let playerChoice = prompt ("Type a number: Rock = 0, Paper = 1, Scissors = 2")

    if (playerChoice == 0) {
        return "Rock";
    }

    else if (playerChoice == 1) {
        return "Paper"
    }
    
    else if (playerChoice == 2) {
        return "Scissors";
    }
    else {
        console.log("Invalid choice. Try again.")
        return null;
    }
}

function game (playerSelection, computerSelection) {
    
    if (
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Scissors"
    )   {
        roundWinner = (`Computer Won! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        }
        
      
     if (
        computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Scissors" && playerSelection === "Rock" ||
        computerSelection === "Paper" && playerSelection === "Scissors"
        )   {
            roundWinner = (`Player Won! ${playerSelection} beats ${computerSelection}`);
            playerScore++
            }

    if (playerSelection === computerSelection) {
            roundWinner = ('It is a tie!');
            }
    
    console.log(roundWinner);       
    return (`Your score is ${playerScore}, the computer's score is ${computerScore}`);

}

