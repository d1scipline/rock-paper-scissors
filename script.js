function getComputerChoice () {
    let choice = (Math.floor(Math.random() * 100)) % 3 + 1;
    return choice;
}

function getHumanChoice () {
    let choice = prompt("What's your choice: ");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return 1;
    }
    else if (choice == "paper") {
        return 2;
    }
    else if (choice == "scissors") {
        return 3;
    }
    else {
        return 0;
    }
}



function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound (computerChoice, humanChoice) {
        if (humanChoice == 0) {
            console.log("Invalid option. Please enter one of the following: rock, paper, scissors.");
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a tie!");
        }
        else if (humanChoice == 1 && computerChoice == 3) {
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        }
        else if (humanChoice == 3 && computerChoice == 1) {
            console.log("You lose! Scissors beat Rock!");
            computerScore += 1;
        }
        else if (humanChoice == 1 && computerChoice == 2) {
            console.log("You lose! Paper beats Rock.");
            computerChoice += 1;
        }
        else if (humanChoice == 2 && computerChoice == 1) {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        }
        else if (humanChoice == 2 && computerChoice == 3) {
            console.log("You lose! Scissors beat Rock!");
            computerScore += 1;
        }
        else if (humanChoice == 3 && computerChoice == 2) {
            console.log("You win! Scissors beat Rock!");
            humanScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
      }
    
    if (humanScore == computerScore) {
        console.log("Game ends! It's a tie.");
    }
    else if (humanScore > computerScore) {
        console.log("Game ends! You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Game ends! You lost.");
    }
      
}

playGame();