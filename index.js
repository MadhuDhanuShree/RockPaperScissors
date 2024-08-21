// const rock = 1;
// const paper = 2;
// const scissors = 3;

// function getComputerMove() {
//   return Math.floor(Math.random() * 3) + 1; 
// }

// function getMoveName(move) {
//   switch (move) {
//     case 1:
//       return "rock";
//     case 2:
//       return "paper";
//     case 3:
//       return "scissors";
//     default:
//       return "invalid move";
//   }
// }

// function playGame(playerMove) {
//   const computerMove = getComputerMove();
//   //console.log();
//   document.getElementById("result").innerHTML=`Computer move: ${getMoveName(computerMove)}`

//   if (playerMove === computerMove) {
//     // console.log("It's a tie!");
//     document.getElementById("print").innerHTML="It's a tie!"
//   } else if (
//     (playerMove === rock && computerMove === scissors) ||
//     (playerMove === scissors && computerMove === paper) ||
//     (playerMove === paper && computerMove === rock)
//   ) {
//     // console.log("You win!");
//     document.getElementById("print").innerHTML="You win!"
//   } else {
//     // console.log("You lose!");"
//     document.getElementById("print").innerHTML="You lose!"
//   }
// }
const rock = 1;
const paper = 2;
const scissors = 3;

let resultElement = document.getElementById("result");
let printElement = document.getElementById("print");
let playerScoreElement = document.querySelector(".p-count");
let computerScoreElement = document.querySelector(".c-count");
let movesLeftElement = document.querySelector(".movesleft");
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;

function getComputerMove() {
  return Math.floor(Math.random() * 3) + 1; // returns 1, 2, or 3
}

function getMoveName(move) {
  switch (move) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "invalid move";
  }
}

function playGame(playerMove) {
  if (movesLeft <= 0) {
    resultElement.textContent = "Game Over!";
    return;
  }

  const computerMove = getComputerMove();
  printElement.textContent = `You chose ${getMoveName(playerMove)} and computer chose ${getMoveName(computerMove)}`;

  if (playerMove === computerMove) {
    resultElement.textContent = "It's a tie!";
  } else if (
    (playerMove === rock && computerMove === scissors) ||
    (playerMove === scissors && computerMove === paper) ||
    (playerMove === paper && computerMove === rock)
  ) {
    resultElement.textContent = "You win!";
    playerScore++;
  } else {
    resultElement.textContent = "You lose!";
    computerScore++;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  movesLeft--;
  movesLeftElement.textContent = `Moves Left: ${movesLeft}`;

  if (movesLeft === 0) {
    if (playerScore > computerScore) {
      resultElement.textContent = "You won the game!";
    } else if (playerScore < computerScore) {
      resultElement.textContent = "Computer won the game!";
    } else {
      resultElement.textContent = "It's a tie game!";
    }
  }
}