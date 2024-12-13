let playerName;

// Function 1: Declaration
function gameOne() {
  playerName ||= prompt("Welcome to Game 1! What's your name?");
  if (!playerName) return alert("Please enter a valid name!");

  let playAgain;
  do {
    let result = Math.random() > 0.5 ? "Win!" : "Lose!";
    alert(`${playerName}, you ${result} in Game 1.`);
    playAgain = prompt(`${playerName}, would you like to keep playing this game? y/n`).toLowerCase() === 'y';
  } while (playAgain);

  handleSessionEnd();
}

// Function 2: Expression
const gameTwo = function () {
  playerName ||= prompt("Welcome to Game 2! What's your name?");
  if (!playerName) return alert("Please enter a valid name!");

  let playAgain;
  do {
    let number = Math.floor(Math.random() * 10) + 1;
    alert(`${playerName}, your random number is ${number} in Game 2.`);
    playAgain = prompt(`${playerName}, would you like to keep playing this game? y/n`).toLowerCase() === 'y';
  } while (playAgain);

  handleSessionEnd();
};

// Function 3: Arrow
const gameThree = () => {
  playerName ||= prompt("Welcome to Game 3! What's your name?");
  if (!playerName) return alert("Please enter a valid name!");

  let playAgain;
  do {
    let diceRoll = Math.ceil(Math.random() * 6);
    alert(`${playerName}, you rolled a ${diceRoll} in Game 3.`);
    playAgain = prompt(`${playerName}, would you like to keep playing this game? y/n`).toLowerCase() === 'y';
  } while (playAgain);

  handleSessionEnd();
};

// Handle Session End
function handleSessionEnd() {
  const anotherGame = prompt(`${playerName}, would you like to pick another game to play? y/n`).toLowerCase();
  if (anotherGame === 'n') {
    document.getElementById('farewell-message').style.display = 'block';
  }
}

// Reload Page
function reloadPage() {
  location.reload();
}

