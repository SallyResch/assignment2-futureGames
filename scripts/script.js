let gameInstuctions = "";

const userName = prompt("What is you name?");

let randomWalkEvent = WALK_EVENTS[Math.floor(Math.random() * WALK_EVENTS.length)];
let randomChestEvent = CHEST_EVENTS[Math.floor(Math.random() * CHEST_EVENTS.length)];
let randomYellEvent = YELL_EVENTS[Math.floor(Math.random() * YELL_EVENTS.length)];
let userChoise = parseInt(prompt(`${userName} is standing in a big endless cave. ${userName} has three options(1, 2, 3): 1. Open the golden chest thats infront of you , 2. Move further into the cave, 3. Yell HELLO?! and see if you get an answer`));

const WALK_EVENTS = [
  "The cavewalls starts to close in",
  `The cave seems to expand into a larger open space, which makes ${userName} feel overwhelmed`,
  `The air grows colder, and ${userName} breath becomes visible in the dim light`,
  "A faint smell of perfume lingers in the air — completely out of place here"
]
const CHEST_EVENTS = [
  `Inside the chest ${userName} finds a beautiful crown of gold, stacked with rubys and other gems`,
  `As ${userName} lifts the lid, a puff of smoke escapes - you feel weaker instantly`,
  `A tiny goblin jumps out, laughs, and runs away with ${userName}'s shoe`,
  "The chest contains a note: “Better luck next time"
]
const YELL_EVENTS = [
  `${userName} waits a couple of seconds and nothing comes back, seems to be empty`,
  `${userName} hear their own word return — but whispered right behind them`,
  `A small pebble rolls toward ${userName}, as though pushed by an invisible hand`,
  `The echo replies, “Hello!” — cheerfully, like it's genuinely happy to hear you`
]

if (userChoise === 1 || userChoise === 2 || userChoise === 3) {
  if (userChoise === 1) {
    alert(`${userName} opens the golden chest and ${randomChestEvent}`);
    console.log(randomChestEvent)
  } else if (userChoise === 2) {
    alert(`${userName} takes a few steps further into the cave and ${randomWalkEvent}`);
    console.log(randomWalkEvent)
  } else {
    alert(`${userName} yells out the word HELLO?! and the cave echos back and ${randomYellEvent}`);
    console.log(randomYellEvent)
  }
}
else {
  alert("Read the instructions dickhead");
}



