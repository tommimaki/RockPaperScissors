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
    return content.textContent = `tie, both played ${userHand}`;
  } else if (
    (computer == "paper" && userHand == "scissors") ||
    (computer == "scissors" && userHand == "rock") ||
    (computer == "rock" && userHand == "paper")
  ) {
    userPoints = userPoints + 1;
    return content.textContent = `user wins with ${userHand} against ${computer}, score: user: ${userPoints}, computer: ${computerPoints}`;
  } else {
    computerPoints = computerPoints + 1;
    return content.textContent =  `computer wins with ${computer} against ${userHand}, score: user: ${userPoints}, computer: ${computerPoints}`;
  }
}


// get all buttons to buttons variable
const buttons = document.querySelectorAll("button");

// add eventlisteners to buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(comparingAnswers(button.id));
    showScore();
  });
});

// add div to dom

let body = document.querySelector("body");

const content = document.createElement("div");
content.textContent = `userpoints: ${userPoints}`;

function showScore() {
  body.appendChild(content);
}

showScore();
