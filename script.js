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

function playRound(){
    let score = 0;
    let playerChoice = checkPlayerChoice();
    let computerChoice = getComputerChoice();
    switch (playerChoice){
        case computerChoice:
            console.log("You had a draw with the computer");
            break;
        case "rock":
            if (computerChoice === "scissors"){
                console.log("You win! Rock beats scissors.")
                score++
            } else if (computerChoice === "paper"){
                console.log("you lose! paper beats rock.")
                score--
            }
            break;
        case "paper":
            if (computerChoice === "rock"){
                console.log("You win! Paper beats rock.")
                score++
            } else if (computerChoice === "scissors"){
                console.log("you lose! Scissors beat paper.")
                score--
            }
            break;
        case "scissors":
            if (computerChoice === "paper"){
                console.log("You win! Scissors beat paper.")
                score++
            } else if (computerChoice === "rock"){
                console.log("you lose! Rock beats scissors.")
                score--
            }
            break;
    }
    return score;
}


//let computerSelection = getComputerChoice();
//let playerSelection = checkPlayerChoice();

function bestOfFive() {
    let roundNum = 0;
    let humanScore = 0;
    let computerScore = 0;
    let result = 0;
    while (roundNum < 5) {
        result = playRound();
        switch (result){
            case 0:
                roundNum++;
                break;
            case 1:
                roundNum++;
                humanScore++;
                break;
            case -1:
                roundNum++;
                computerScore++;
                break;

        }
    }
    if (humanScore > computerScore) {
        return console.log("Congratulations you won! Your score was: " + humanScore + " The computer's score was: " + computerScore);
    } else if (humanScore < computerScore) {
        return console.log("Sorry you lost! Your score was: " + humanScore + " The computer's score was: " + computerScore);
    } else {
        return console.log("You had a tie! You both got the same score.");
    }
}

bestOfFive();