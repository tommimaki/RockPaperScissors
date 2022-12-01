//variables
let playerScore;
let compScore;

let choice;
let compInput;
let userInput = prompt("write rock paper or scissors");

function getCompuperChoice() {
  choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    compInput = "rock";
  } else if (choice == 1) {
    compInput = "paper";
  } else {
    compInput = "scissors";
  }
  return compInput;
}

getCompuperChoice();

function compareAnswers(compInput, userInput) {
  if (compInput == userInput) {
    return "tie";

    //rock choises
  } else if (compInput == "rock" && userInput == "paper") {
    playerScore+= 1;
    return `computer played ${compInput} user played ${userInput}, user wins `;
  } else if (compInput == "rock" && userInput == "scissors") {
    compScore+= 1;
    return `computer played ${compInput} user played ${userInput}, computer wins `;
  }

  // paper choises
  else if (compInput == "paper" && userInput == "scissors") {
    playerScore += 1;
    return `computer played ${compInput} user played ${userInput}, user wins `;
  } else if (compInput == "paper" && userInput == "rock") {
    compScore+= 1;
    return `computer played ${compInput} user played ${userInput}, computer wins `;
  }
  // scissors choises
  else if (compInput == "scissors" && userInput == "rock") {
    playerScore+= 1;
    return `computer played ${compInput} user played ${userInput}, user wins `;
  } else if (compInput == "scissors" && userInput == "paper") {
    compScore+= 1;
    return `computer played ${compInput} user played ${userInput}, computer wins `;
  } else {
    return "input not valid";
  }
}

// console.log(compareAnswers(compInput,userInput));

function play() {
  let i = 1;
  while (i <= 5) {
    let compC = getCompuperChoice();
    let userInput = prompt("write rock paper or scissors");
    console.log(compareAnswers(compC, userInput));
    i++;
  }
}

play();
