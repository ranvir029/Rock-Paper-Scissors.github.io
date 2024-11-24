const choices = ["rock", "paper", "scissors"];
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const playerDisplayScore=document.getElementById("playerDisplayScore");
const computerDisplayScore=document.getElementById("computerDisplayScore");
const resetbtn=document.getElementById("resetbtn");
const startbtn=document.getElementById("startbtn");
let computerScore=0;
let PlayerScore=0;


function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random(choices) * 3)];
    let result = "";
    if (computerChoice === playerChoice) {
        result = "IT'S A TIE!";

    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `Player:${playerChoice}`;
    computerDisplay.textContent = `Computer:${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    switch (result) {
        case "YOU WIN!":
            PlayerScore++;
            playerDisplayScore.textContent=PlayerScore;
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            computerScore++;
            computerDisplayScore.textContent=computerScore;
            resultDisplay.classList.add("redText");
            break;
    }
}

      resetbtn.addEventListener("click",event=>{
          PlayerScore=0;
          computerScore=0;
          playerDisplayScore.textContent=PlayerScore;
          computerDisplayScore.textContent=computerScore;
          playerDisplay.textContent = `Player: `;
          computerDisplay.textContent = `Computer: `;
          resultDisplay.textContent = " "
      });   