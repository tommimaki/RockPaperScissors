// vars
let computerHand;


// counters
let userPoints = 0;
let computerPoints = 0;

// get computer answer function
//lets add an array where we have written the possible answers
// and random number chooses an option

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return (computerHand = choices[Math.floor(Math.random() * choices.length)]);
}
//testi, pelaa pelaa
//  getComputerChoice();
// console.log(computerHand)

// seuraava funktio, vertaa computerHand ja userHand

function comparingAnswers(userHand) {
  let computer = getComputerChoice();
  let rounds = 0;

  console.log("user plays: " + userHand + " computer plays: " + computer);
  if (userHand == computer) {
    return "tie";
  } else if (
    (computer == "paper" && userHand == "scissors") ||
    (computer == "scissors" && userHand == "rock") ||
    (computer == "rock" && userHand == "paper")
  ) {
    userPoints = userPoints + 1;
    return `user wins with ${userHand}, score: user: ${userPoints}, computer: ${computerPoints}`;
  } else {
    computerPoints = computerPoints + 1;
    return `computer wins with ${computer}, score: user: ${userPoints}, computer: ${computerPoints}`;
  }
}

// function to play 5 rounds and announce winner

function play5() {
    let x;
  for (let i = 0; i < 5; i++) {
    x = prompt("play: rock, paper or scissors");
    console.log(comparingAnswers(x));
  } 
}

play5();
