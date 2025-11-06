//alert("GUESS THE NUMBER GAME: \nGuess a number between 1 and 100 \nYou have 10 attempts to success! \nGood Luck! \nOh and by the way:\n You have 10 points, if you get to zero you loose mouhahaha");

const numberGuessingGame = () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const userGuess = parseInt(prompt("Enter a number between 1 and 100:"));
  //If guesses Array contains more then 10 
  let guessesArray = [];
  guessesArray.push(userGuess);

  let userPoints = 10;

  while (guessesArray < 10 && userPoints > 0) {
    const guessCheck = () => {
      if (userGuess < 1 || userGuess > 100) {
        --userPoints
        console.log(`You guessed a number that was out of range of the rules\n You get a penaltyof -1 from your points\n User Points: ${userPoints}`);
      }
    }
    guessCheck();
  }
}
//numberGuessingGame();


