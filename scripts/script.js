alert("GUESS THE NUMBER GAME: \nGuess a number between 1 and 100 \nYou have 10 attempts to succeed! \nGood Luck! \nOh and by the way:\n You have 100 points, if you get to zero you loose mouhahaha. You get pointpenalty if you: \n Write same number twice, \n Guess a number out of rangeof 1-100\n Or type in something that is not an number");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesArray = [];
let userPoints = 100;
const maxGuesses = 10;

const isCancelled = (guess) => guess === null;
const isNotNumber = (guess) => isNaN(guess);
const isOutOfRange = (guess) => guess < 1 || guess > 100;
const isDuplicateGuess = (guess) => guessesArray.includes(guess);

const validateGuess = (userGuess) => {
  if (userGuess === null) {
    alert(`Game cancelled. Thanks for visiting the games site`);
    return "cancel";
  }

  if (isNaN(userGuess)) {
    userPoints - 20;
    alert(`Thats not a number dickhead! -20 point. \n Current points: ${userPoints}`);
    return false;
  }

  if (userGuess < 1 || userGuess > 100) {
    userPoints - 10;
    alert(`You guessed a number that was out of range of the rules dumbass\n You get a penalty of -20 points\n User Points: ${userPoints}`);
    return false;
  }

  if (guessesArray.includes(userGuess)) {
    userPoints - 20;
    alert(`You have already guessed the number ${guessesArray} \n -20 point, stupid. Current points: ${userPoints}`);
    return false;
  }

  guessesArray.push(userGuess);

  if (userGuess < randomNumber) {
    alert("To low");
    userPoints + 10;
    return false;
  } else if (userGuess > randomNumber) {
    alert("To high");
    userPoints + 10;
    return false;
  } else {
    alert(`Congratulations! You guessed the number ${userGuess} which is the correct number: ${randomNumber}`);
    return `You won with the points of ${userPoints}`
  }
};


while (guessesArray.length < 10 && userPoints > 0) {

  let userGuess = prompt(`Enter a number between 1 and 100:\n ${guessesArray}`);

  if (userGuess !== null) {
    userGuess = parseInt(userGuess);
  }

  const result = guessCheck(userGuess);

  if (result === "cancel") {
    break
  }

  if (result === "win") {
    break
  }
}

if (userPoints <= 0) {
  alert(`You ran out of points! Game over. The number was ${randomNumber}`);
} else if (guessesArray.length >= 10 && guessesArray[guessesArray.length - 1] !== randomNumber) {
  alert(`You've used all your attempts! Game over. The number was ${randomNumber}`);
}
alert(`Your guesses: ${guessesArray} \n Remaining points: ${userPoints}`);





