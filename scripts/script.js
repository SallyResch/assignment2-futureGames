const startButton = document.querySelector(".start-button");
const rulesContent = document.querySelector(".rules-content");
const gameContent = document.querySelector(".game-content");

const startGame = () => {
  startButton.addEventListener("click", () => {
    rulesContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
  })
}
startGame();