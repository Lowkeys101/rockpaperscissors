// rock paper scissors game

//computer randomply picks rock/paper/scissors

function computerPlay() {
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "";
    }
}
// ask for player option and return it
function playerChoice() {
    let playerOption;
    let isValid = false;
    // continue to prompt until valid response
    while(!isValid) {
        playerOption = prompt("Pick Rock or Paper or Scissors", "Rock");
        //check for empty responses
        if(playerOption) {
            playerOption = playerOption.toLowerCase();
        } 
        isValid = playerOption === "rock" || playerOption === "paper" || playerOption === "scissors";
    }
    return playerOption;
}


let playerWins = 0;
let computerWins = 0;
let draws = 0;

function haveAWinner(divContainer, divScore) {
    if(playerWins === 5) {
        divContainer.textContent = "You have won! Congratulations! "
        divScore.textContent = "";

        playerWins = 0;
        computerWins = 0;
        draws = 0;
    }
    if(computerWins === 5) {
        divContainer.textContent = "Computer has won! Better luck next time!"
        divScore.textContent = "";

        playerWins = 0;
        computerWins = 0;
        draws = 0;
    }
}
//check who wins and return a string with winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const divContainer = document.querySelector(".content");
    const divScore = document.querySelector(".results");
    divScore.textContent = `Total score is: Player: ${playerWins}     Computer: ${computerWins}       Draws: ${draws}`;

    if (playerSelection === computerSelection) {
        draws++;
        divContainer.textContent = `It's a draw! You've picked ${playerSelection} and computer picked ${computerSelection}`;
        divScore.textContent = `Total score is: Player: ${playerWins}     Computer: ${computerWins}       Draws: ${draws}`;
    } else if (
                (playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")
              ) {
                computerWins++;
                divContainer.textContent = `You lose this round! You've picked ${playerSelection} and computer picked ${computerSelection}`;
                divScore.textContent = `Total score is: Player: ${playerWins}     Computer: ${computerWins}       Draws: ${draws}`;
    } else {
        playerWins++;
        divContainer.textContent = `You win this round! You've picked ${playerSelection} and computer picked ${computerSelection}`;
        divScore.textContent = `Total score is: Player: ${playerWins}     Computer: ${computerWins}       Draws: ${draws}`;
    }

    haveAWinner(divContainer, divScore);                 
}

function addEventListenerToButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            playRound(e.target.textContent, computerPlay());
        });
    });
}

addEventListenerToButtons();
// play one round

