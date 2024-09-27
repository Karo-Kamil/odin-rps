const list = document.querySelector("ul");
const playerScore = document.querySelector(".human");
const compScore = document.querySelector(".comp");
const announcements = document.querySelector(".anno");
const final = document.querySelector(".finish");

list.addEventListener("click", (event) =>{
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }

})






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
    btn.forEach((button) =>{
        button.addEventListener("click", () => {
            console.log(button.id);
            playRound(button.id);
        })
    })

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

let pScore = 0;
let cScore = 0;

function playRound(playerSelect){
    final.textContent = "";
    let playerChoice = playerSelect;
    let computerChoice = getComputerChoice();
    switch (playerChoice){
        case computerChoice:
            announcements.textContent = "You had a draw with the computer";
            break;
        case "rock":
            if (computerChoice === "scissors"){
               announcements.textContent = "You win! Rock beats scissors.";
                pScore++;
            } else if (computerChoice === "paper"){
                announcements.textContent = "you lose! paper beats rock.";
                cScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock"){
                announcements.textContent = "You win! Paper beats rock.";
                pScore++
            } else if (computerChoice === "scissors"){
                announcements.textContent = "you lose! Scissors beat paper.";
                cScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper"){
                announcements.textContent = "You win! Scissors beat paper.";
                pScore++;
            } else if (computerChoice === "rock"){
                announcements.textContent = "you lose! Rock beats scissors.";
                cScore++;
            }
            break;
    }
    compScore.textContent = cScore;
    playerScore.textContent = pScore;
    if (pScore === 5) {
        final.textContent = "Congratulations! You won.";
        pScore = 0;
        cScore = 0;
    } else if (cScore === 5) {
        final.textContent = "Game Over! You lost.";
        pScore = 0;
        cScore = 0;
    }
    //return score;
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
        return alert("Congratulations you won! Your score was: " + humanScore + " The computer's score was: " + computerScore);
    } else if (humanScore < computerScore) {
        return alert("Sorry you lost! Your score was: " + humanScore + " The computer's score was: " + computerScore);
    } else {
        return alert("You had a tie! You both got the same score.");
    }
}

