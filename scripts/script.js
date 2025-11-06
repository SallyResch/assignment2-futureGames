alert("GUESS THE NUMBER GAME: \nGuess a number between 1 and 100 \nYou have 10 attempts to success! \nGood Luck! \nOh and by the way:\n You have 10 points, if you get to zero you loose mouhahaha");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesArray = [];
let userPoints = 10;

while (guessesArray.length < 10 && userPoints > 0) {
  const userGuess = parseInt(prompt("Enter a number between 1 and 100:"));
  guessCheck(userGuess);
  break;
}

const guessCheck = (userGuess) => {
  //if user typed in a to low or to high number according to the rules
  if (userGuess < 1 || userGuess > 100) {
    --userPoints
    alert(`You guessed a number that was out of range of the rules\n You get a penalty of -1 from your points\n User Points: ${userPoints}`);
  }

  //If user already guessed that number
  if (guessesArray.includes(userGuess)) {
    --userPoints
    alert(`You have already guessed that number ${guessesArray} \n -1 point. Current points: ${userPoints}`)
  }

  //Checks if the user typed in somthing other then a number:
  if (isNaN(userGuess)) {
    --userPoints;
    alert(`Thats not a number! -1 point. \n Current points: ${userPoints}`);
    return false;
  }
}





