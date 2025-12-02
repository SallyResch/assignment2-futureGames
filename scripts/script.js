const startButton = document.querySelector(".start-button");
const rulesContent = document.querySelector(".rules-content");
const gameContent = document.querySelector(".game-content");
let randomNumber = Math.floor(Math.random() * 100) + 1;

const addInputField = () => {
  const inputField = document.createElement("input");
  inputField.type = "number";
  inputField.classList.add("guess-input");
  gameContent.appendChild(inputField);
}

const startGame = () => {
  startButton.addEventListener("click", () => {
    rulesContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
    addInputField();
  })

}
startGame();