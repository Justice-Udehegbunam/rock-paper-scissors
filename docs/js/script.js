// Create a function to grab a choice from the user input
// and return it as a string
let choices = ["rock", "paper", "scissors"];
const prompt = require("prompt-sync")();
function getComputerChoice() {
  prompt("Enter a choice between rock, paper, or scissors: ");
  let computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}
console.log(getComputerChoice());
