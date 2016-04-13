////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove = null;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return /* Your Expression */;
    if (move === null || move === undefined){
        return getInput();
    } else {
        return move;
    }
}

var computerMove = null;

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //return /* Your Expression */;
    if (move === null || move === undefined){
        return randomPlay();
    } else {
        return move;
    }
}

var winner = null;

function getWinner(playerMove, computerMove) {
    //var winner;
    //var playerMove = getPlayerMove();
    //var computerMove = getComputerMove();
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove){
        winner = 'tie';
    } else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')){
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        switch (winner){
            case 'player': console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            playerWins++;
            break;
            case 'computer': console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            computerWins++;
            break;
            case 'tie': console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        }
        console.log('Current score: player - ' + playerWins + ' | computer - ' + computerWins);
    }

    if (playerWins === 5){
        alert("player wins!");
    } else {
        alert("computer wins!");
    }
}

playToFive();

