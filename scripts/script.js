const startButton = document.querySelector(".start-button");
const rulesContent = document.querySelector(".rules-content");
const gameContent = document.querySelector(".game-content");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const userGuessInput = document.querySelector(".userGuess");
const guesses = document.querySelector(".guesses");
const guessSubmit = document.querySelector(".userGuessSubmit");
let amountOfGuesses = 1;
const resultText = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

let newResetButton;

const guessCheck = () => {
  const userGuess = Number(userGuessInput.value);

  if (amountOfGuesses === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    resultText.textContent = "Congratulations! You got it right!";
    resultText.classList.add("green");
    resultText.classList.remove("red");
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    resultText.textContent = "Wrong!";
    resultText.classList.add("red");
    resultText.classList.remove("green");

    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Guess is too low!";
    } else {
      lowOrHigh.textContent = "Guess is too high!";
    }
  }

  amountOfGuesses++;
  userGuessInput.value = "";
  userGuessInput.focus(); // Fix
};
guessSubmit.addEventListener("click", guessCheck);

const setGameOver = () => {
  userGuessInput.disabled = true;
  guessSubmit.disabled = true;

  newResetButton = document.createElement("button");
  newResetButton.textContent = "Start new game";

  gameContent.append(newResetButton); // Fix
  newResetButton.addEventListener("click", resetGame);
};

const resetGame = () => {
  amountOfGuesses = 1;

  const resetResults = document.querySelectorAll(".result h3");
  for (const resetResult of resetResults) {
    resetResult.textContent = "";
  }

  newResetButton.remove();

  userGuessInput.disabled = false;
  guessSubmit.disabled = false;
  userGuessInput.value = "";
  userGuessInput.focus();

  resultText.classList.remove("red");
  resultText.classList.remove("green");

  randomNumber = Math.floor(Math.random() * 100) + 1;
};

const startGame = () => {
  startButton.addEventListener("click", () => {
    rulesContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
  });
};

startGame();