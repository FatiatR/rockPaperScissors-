//Write a function that get the computer choice
//I use the const to declare the choices sunce they will be constant through the game.
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

 //Write a function that takes the human choice and returns it
 //Using the if,else and else if function.If the humanChoice and computerChoice is the same return draw. 
function getHumanChoice(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw!!";
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
             (humanChoice === "scissors" && computerChoice === "paper") || 
             (humanChoice === "paper" && computerChoice === "rock")) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

//Then i declared the initial score for both computerChoice and humanCjoice by using the 'let' 
let humanScore = 0;
let computerScore = 0;

// Then I wrote the logic of the game and also making sure my humanChoice is case insensitive,that is Rock,rock,RoCk is acceptable 
while (true) {
  // Get human choice
  let humanChoice = prompt("Enter: 'rock','paper','scissors':");
  while (humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper") {
    humanChoice = prompt("Invalid Choice.Enter: 'rock','paper','scissors':");
  
  }

  // Get computer choice
  const computerChoice = getComputerChoice();

  // Show the humanChoice and computerChouce
  console.log("You chose: " + humanChoice);
  console.log("Computer chose: " + computerChoice);

  // Calculate the game result 
  const playRound = getHumanChoice(humanChoice, computerChoice);
  console.log(playRound);


  if (playRound === "You win!") {
    humanScore++;
  } else if (playRound !== "Draw!!") {
    computerScore++;
  }

  // Thus will show do you want to continue playing? question,then you can pick Yes/No
  const continuePlaying = prompt("Do you want to continue playing? (Yes/No)");
  
}

// Show the final score
console.log("Final Score: You won " + humanScore + " times, Computer won " + computerScore + " times!");