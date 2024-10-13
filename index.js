//Write a function that gets the Computer choice
function getComputerChoice(rock, paper,scissors) 
{ 
const choice1=rock ;
const choice2=paper;
const choice3=scissors ;
choices=["choice1","choice2","choice3"];
const randomIndex=Math.floor(Math.random() * 3);
 return choices[randomIndex];
 }
 console.log(getComputerChoice);