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
//check who wins and return a string with winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`It's a draw! You've picked ${playerSelection} and computer picked ${computerSelection}`);
        return 0;
    } else if (
                (playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")
              ) {
                console.log(`You lose! You've picked ${playerSelection} and computer picked ${computerSelection}`);
                return -1;
    } else {
        console.log(`You win! You've picked ${playerSelection} and computer picked ${computerSelection}`);
        return 1;
    }                 
}
// play n rounds
function game(n) {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let roundResult;
    for(let i = 0; i < n; i++) {
        roundResult = playRound(playerChoice(),computerPlay());
        if (roundResult === 1) {
            playerWins++;
        } else if (roundResult === -1) {
            computerWins++;
        } else {
            draws++;
        }
    }
    console.log(`You have won ${playerWins} round(s). Computer have won ${computerWins} round(s) and ${draws} round(s) ended in a draw`)


}
// play
game(5);
