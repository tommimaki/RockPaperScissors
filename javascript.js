
//variables
let compInput;
let userInput = prompt("write rock paper or scissors");

function getCompuperChoice() {

  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    compInput = "rock";
  } else if (choice == 1) {
    compInput = "paper";
  } else {
    compInput = "scissors"
  }
}

getCompuperChoice();
console.log(compInput)
console.log(userInput)

function compareAnswers(compInput, userInput){
    if (compInput == userInput) {
        console.log('tie')

        //rock choises
    } else if (compInput == "rock" && userInput == "paper"){
        console.log(`computer played ${compInput} user played ${userInput}, user wins `)
    } else if (compInput == "rock" && userInput == "scissors"){
        console.log(`computer played ${compInput} user played ${userInput}, computer wins `)
    }  
    
    // paper choises
    else if (compInput == "paper" && userInput == "scissors"){
        console.log(`computer played ${compInput} user played ${userInput}, user wins `)
    } else if (compInput == "paper" && userInput == "rock"){
        console.log(`computer played ${compInput} user played ${userInput}, computer wins `)
    }  
     // scissors choises
    else if (compInput == "scissors" && userInput == "rock"){
        console.log(`computer played ${compInput} user played ${userInput}, user wins `)
    } else if (compInput == "scissors" && userInput == "paper"){
        console.log(`computer played ${compInput} user played ${userInput}, computer wins `)
    } else{
        console.log('input not valid');
    }
    
}

compareAnswers(compInput,userInput);