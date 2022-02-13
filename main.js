//Create a computer selection that will randomly return either 'rock', 'paper', or 'scissors'
function computerPlay(){
    const options = [ 'rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

// create player selection
function playerPlay() {
    const playerSelection = prompt('Rock, Paper, or Scissors?');

    return playerSelection.trim().toLowerCase();
}

//create a function that plays a single round of the game

function playRound(playerInput, computerInput){

    let roundMessage = 'none';
    let winner = 'none';

    if(playerInput === computerInput){
        roundMessage = 'It is a tie!';
    }
    else if(playerInput === 'rock'){
        if(computerInput === 'paper'){
            roundMessage =  'Computer wins!';
            winner = 'computer';
        }
        else{
            roundMessage =  'Player wins!';
            winner = 'player';
        }
    }
    else if(playerInput === 'paper'){
        if(computerInput === 'scissors'){
            roundMessage =  'Computer wins!';
            winner = 'computer';
        }
        else{
            roundMessage =  'Player wins!';
            winner = 'player';
        }
    }
    else if(playerInput === 'scissors'){
        if(computerInput === 'rock'){
            roundMessage =  'Computer wins!';
            winner = 'computer';
        }
        else{
            roundMessage = 'Player wins!';
            winner = 'player';
        }
    }

    console.log(roundMessage);
    return winner;
}

//Create a loop that plays 5 rounds of the game

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = 0;

    for (let i = 0; i < 5; i++) {
        let currentWinner = playRound(playerPlay(), computerPlay());

        if(currentWinner === 'player') {
            playerScore++;
        }else if (currentWinner === 'computer'){
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        gameWinner = 'Player';
    }else if (computerScore > playerScore){
        gameWinner = 'Computer';
    }else {
        gameWinner = 'Tie'
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    if (gameWinner === 'Tie') {
        console.log("It's a Tie")
    }else {
        console.log(`Winner: ${gameWinner}`)
    }
}

game();