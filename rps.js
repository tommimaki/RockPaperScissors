// vars
let computerHand;

// counters
let userPoints = 0;
let computerPoints = 0;

// get computer answer function
// array with possible answers, Math.random chooses one

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return (computerHand = choices[Math.floor(Math.random() * choices.length)]);
}

 // comparing answers
function comparingAnswers(userHand) {
  let computer = getComputerChoice();
  let rounds = 0;

  if (userHand == computer) {
    return `tie, both played ${userHand}`;
  } else if (
    (computer == "paper" && userHand == "scissors") ||
    (computer == "scissors" && userHand == "rock") ||
    (computer == "rock" && userHand == "paper")
  ) {
    userPoints = userPoints + 1;
    return `user wins with ${userHand} against ${computer}, score: user: ${userPoints}, computer: ${computerPoints}`;
  } else {
    computerPoints = computerPoints + 1;
    return `computer wins with ${computer} against ${userHand}, score: user: ${userPoints}, computer: ${computerPoints}`;
  }
}

// function to play 5 rounds and announce winner

function play5() {
  let x;
  for (let i = 0; i <= 5; i++) {
    userInput = prompt("play: rock, paper or scissors").toLowerCase();
    console.log(comparingAnswers(userInput));

    if (i == 4) {
      if (computerPoints > userPoints) {
        return `Computer wins the game with ${computerPoints} points :(!  refresh page to play again)`;
      } else if (computerPoints < userPoints) {
        return `user wins the game with ${userPoints} points!!`;
      } else {
        return `tie, userpoints: ${userPoints},  computerpoints: ${computerPoints}, refresh to play again `;
      }
    }
  }
}

// call function and log to console
console.log(play5());
