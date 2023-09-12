const prompt = require("prompt-sync")();
let choices = ["rock", "paper", "scissors"];

function playGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice(); // Get the computer's choice after the player has made their selection

  if (playerSelection === computerSelection) {
    return "It's a tie!"; // If the player and computer choose the same thing, it's a tie
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors"; // If the player chooses rock and the computer chooses scissors, the player wins
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock"; // If the player chooses rock and the computer chooses paper, the computer wins
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock"; // If the player chooses paper and the computer chooses rock, the player wins
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper"; // If the player chooses paper and the computer chooses scissors, the computer wins
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper"; // If the player chooses scissors and the computer chooses paper, the player wins
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors"; // If the player chooses scissors and the computer chooses rock, the computer wins
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);

    const playerSelection = prompt(
      "Choose your choice: rock, paper, or scissors: "
    ).toLowerCase(); // Prompt the user to choose their choice

    const computerSelection = getComputerChoice(); // Get the computer's choice after the player has made their selection

    const result = playGame(playerSelection, computerSelection); // Call the playGame function to determine the result of the round

    console.log(result); // Display the result of the round

    if (result.includes("win")) {
      playerScore++; // If the player wins, increment their score
    } else if (result.includes("lose")) {
      computerScore++; // If the computer wins, increment their score
    }

    console.log(`Your Score: ${playerScore}, Computer Score: ${computerScore}`);
  }

  // Determine the overall winner
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie! No overall winner.");
  }
}

game();

