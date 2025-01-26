let results = document.querySelector(".results");
let scores = document.querySelector(".scores");

function getComputerChoice () {
    let choice = (Math.floor(Math.random() * 100)) % 3 + 1;
    return choice;
}

function getHumanChoice (event) {
    let choice = event.target.getAttribute("class");
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

let humanScore = 0;
let computerScore = 0;

function playGame (event) {
    
    function playRound (computerChoice, humanChoice) {
        if (humanChoice == 0) {
            results.textContent = "Invalid option. Please enter one of the following: rock, paper, scissors.";
        }
        else if (computerChoice == humanChoice) {
            results.textContent = "It's a tie!";
        }
        else if (humanChoice == 1 && computerChoice == 3) {
            results.textContent = "You win! Rock beats Scissors.";
            humanScore += 1;
        }
        else if (humanChoice == 3 && computerChoice == 1) {
            results.textContent = "You lose! Rock beats Scissors!";
            computerScore += 1;
        }
        else if (humanChoice == 1 && computerChoice == 2) {
            results.textContent = "You lose! Paper beats Rock.";
            computerChoice += 1;
        }
        else if (humanChoice == 2 && computerChoice == 1) {
            results.textContent = "You win! Paper beats Rock.";
            humanScore += 1;
        }
        else if (humanChoice == 2 && computerChoice == 3) {
            results.textContent = "You lose! Scissors beat Paper!";
            computerScore += 1;
        }
        else if (humanChoice == 3 && computerChoice == 2) {
            results.textContent = "You win! Scissors beat Paper!";
            humanScore += 1;
        }
        scores.textContent = "Your score: " + humanScore + " | " + "Computer Score: " + computerScore;
    } 
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log(humanScore, computerScore);
    if (humanScore == 5) {
        alert("You won!");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        alert("You lost!")
        humanScore = 0;
        computerScore = 0;
    }
}

let buttons = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", playGame);
}
