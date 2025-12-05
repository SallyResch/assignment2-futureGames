const startButton = document.querySelector(".start-button");
const rulesContent = document.querySelector(".rules-content");
const gameContent = document.querySelector(".game-content");

const userGuessInput = document.querySelector(".userGuess");
const guessesText = document.querySelector(".guesses");
const guessSubmit = document.querySelector(".userGuessSubmit");

const resultText = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const cancelButton = document.querySelector(".cancel-button");

let randomNumber;
let guessCount;
let userGuesses;
let resetButton;


const startGame = () => {
  startButton.addEventListener("click", () => {
    rulesContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
    initializeGame();
  });
};

const returnToStart = () => {
  gameContent.classList.add("hidden");
  cancelButton.classList.add("hidden");
  rulesContent.classList.remove("hidden");

  initializeGame();
};
const initializeGame = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  userGuesses = [];

  userGuessInput.disabled = false;
  guessSubmit.disabled = false;

  guessesText.textContent = "Previous guesses: ";
  resultText.textContent = "";
  lowOrHigh.textContent = "";

  resultText.classList.remove("red", "green");
  userGuessInput.value = "";
  userGuessInput.focus();

  if (resetButton) resetButton.remove();
};

const guessCheck = () => {
  const rawInput = userGuessInput.value;
  const userGuess = Number(rawInput);

  while (rawInput === "" || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert("Please enter a valid number between 1–100.");
    userGuessInput.value = "";
    return;
  }

  if (userGuesses.includes(userGuess)) {
    lowOrHigh.textContent = "You've already guessed that number!";
    lowOrHigh.classList.add("red");
    userGuessInput.value = "";
    return;
  }

  userGuesses.push(userGuess);
  guessCount++;

  guessesText.textContent = "Previous guesses: ";
  for (let i = 0; i < userGuesses.length; i++) {
    guessesText.textContent += userGuesses[i] + " ";
  }


  if (userGuess === randomNumber) {
    resultText.textContent = "Congratulations! You guessed the number!";
    resultText.classList.add("green");
    lowOrHigh.textContent = "";
    setGameOver();
  } else if (userGuess < randomNumber) {
    lowOrHigh.classList.add("red");
    lowOrHigh.textContent = "Your guess is too low!";
  } else {
    lowOrHigh.classList.add("red");
    lowOrHigh.textContent = "Your guess is too high!";
  }

  userGuessInput.value = "";
  userGuessInput.focus();
};

const setGameOver = () => {
  userGuessInput.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resetButton.classList.add("reset-button");

  gameContent.append(resetButton);
  resetButton.addEventListener("click", initializeGame);
};


guessSubmit.addEventListener("click", guessCheck);
cancelButton.addEventListener("click", returnToStart);
startGame();
