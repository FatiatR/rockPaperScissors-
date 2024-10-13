//Write a function that gets the Computer choice
function getComputerChoice(rock, paper,scissors) 
{ 
const choice1=rock ;
const choice2=paper;
const choice3=scissors ;
let choices=["choice1","choice2","choice3"];
const randomIndex=Math.floor(Math.random() * 3);
 return choices[randomIndex];
 }
 
 //Write a function that takes the human choice and returns it
 
 function getHumanChoice(humanChoice,computerChoice)
 {
     //if human choice is the same thing as computerchoice, return draw
     if (humanChoice===computerChoice){
         return "Draw!!";
     }
     //if 
     else if((humanChoice=== "rock" && computerChoice=== "scissors") || 
     (humanChoice=== "scissors" && computerChoice=== "paper") || 
       (humanChoice=== "paper" && computerChoice=== "rock"))
     
     
     {
         return "You win!";
     }
     else{
         return "You lose!";
     }
 }
 
 //Declaring the human score 
 let humanScore= 0;
 let humanChoice;
 
 //A function that takes human and computer choices
 humanChoice=prompt("Enter: 'rock','paper','scissors':");
 
 while (humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper")
 {
 humanChoice= prompt("Invalid Choice.Enter: 'rock','paper','scissors':")
      
 }
 const computerChoice= getComputerChoice();
 console.log("You chose: " + humanChoice);
 console.log("computerChoice: " + computerChoice);
 
 
 const result =getHumanChoice(humanChoice, computerChoice);
 console.log(result);
 
 if (result=== "You win!")
 {
     humanScore++;
 }
 const continuePlaying=prompt("Do you want to play again? (Yes/No)") ;
 //Display final score
 console.log(" Final Score: + You won " + humanScore + " times!");