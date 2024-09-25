function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    let guess = ""
    switch (value) {
        case 0:
            guess = "rock";
            break;
        case 1:
            guess = "paper";
            break;
        case 2:
            guess = "scissors";
            break;
        
    }
    return guess;

}

function getPlayerChoice() {
    let choice = prompt("Please type down your choice.", "");
    choice = choice.toLowerCase();
    return choice;

}

function checkPlayerChoice() {
    let choice = getPlayerChoice();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        
        alert("Please type your choice correctly!")
        return checkPlayerChoice();
    }
}

let computerChoice = getComputerChoice();
let playerChoice = checkPlayerChoice();

console.log(computerChoice);
console.log(playerChoice);