function getComputerChoice () {
    let choiceMade = Math.floor(Math.random() * 3);

    if (choiceMade == 0) {
    choiceMade = "Rock"

    } else if (choiceMade == 1) {
        choiceMade = "Paper";

    } else if (choiceMade == 2) {
        choiceMade = "Scissors";
    }

    console.log(choiceMade);
    return;
}

getComputerChoice();