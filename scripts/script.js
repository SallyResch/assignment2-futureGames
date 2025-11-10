alert("GUESS THE NUMBER GAME: \nGuess a number between 1 and 100 \nYou have 10 attempts to success! \nGood Luck! \nOh and by the way:\n You have 10 points, if you get to zero you loose mouhahaha");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesArray = [];
let userPoints = 10;
const maxGuesses = 10;

const guessCheck = (userGuess) => {
  if (userGuess === null) {
    alert(`Game cancelled. Thanks for visiting the games site`);
    return "cancel";
  }

  if (isNaN(userGuess)) {
    --userPoints;
    alert(`Thats not a number! -1 point. \n Current points: ${userPoints}`);
    return false;
  }

  if (userGuess < 1 || userGuess > 100) {
    --userPoints
    alert(`You guessed a number that was out of range of the rules\n You get a penalty of -1 from your points\n User Points: ${userPoints}`);
  }

  if (guessesArray.includes(userGuess)) {
    --userPoints
    alert(`You have already guessed that number ${guessesArray} \n -1 point. Current points: ${userPoints}`);
    return false;
  }

  guessesArray.push(userGuess);

  if (userGuess < randomNumber) {
    alert("To low");
    return false;
  } else if (userGuess > randomNumber) {
    alert("To high");
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





