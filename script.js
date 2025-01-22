function getComputerChoice () {
    let choice = (Math.floor(Math.random() * 100)) % 3 + 1;
    return choice;
}

function getUserChoice () {
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