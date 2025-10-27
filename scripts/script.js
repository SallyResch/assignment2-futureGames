const userName = prompt("What is you name?");
let userChoise = parseInt(prompt(`${userName} is standing in a big endless cave. ${userName} has three options(1, 2, 3): 1. Open the golden chest thats infront of you , 2. Move further into the cave, 3. Yell HELLO?! and see if you get an answer`));

if (userChoise === 1 || userChoise === 2 || userChoise === 3) {
  if (userChoise === 1) {
    alert("You open the golden chest");
  } else if (userChoise === 2) {
    alert("You take a few steps further into the cave");
  } else {
    alert("You yell out the word HELLO?! and the cave echos back");
  }
}
else {
  alert("Read the instructions dickhead");
}