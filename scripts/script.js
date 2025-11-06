alert("GUESS THE NUMBER GAME: \nGuess a number between 1 and 100 \nYou have 10 attempts to success! \nGood Luck! \nOh and by the way:\n You have 10 points, if you get to zero you loose mouhahaha");

const numberGuessingGame = () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  //If guesses Array contains more then 10 
  let guessesArray = [];
  let userPoints = 10;
  const userGuess = parseInt(prompt("Enter a number between 1 and 100:"));

  const guessCheck = () => {
    if (userGuess < 1 || userGuess > 100) {
      --userPoints
      console.log(userPoints);
    }
  }
  guessCheck();

}
//numberGuessingGame();


