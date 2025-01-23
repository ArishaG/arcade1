// Guessing Game
function playGuessingGame() {
    let playAgain = true;

    while (playAgain) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let attempts = 0;
        let correctGuess = false;

        while (!correctGuess) {
            const guess = parseInt(prompt("Guess a number between 1 and 10:"));
            if (isNaN(guess)) {
                alert("Please enter a valid number.");
                continue;
            }

            attempts++;
            if (guess > randomNumber) {
                alert("Guess was too high, guess again.");
            } else if (guess < randomNumber) {
                alert("Guess was too low, guess again.");
            } else {
                alert(`You guessed it in ${attempts} guesses!`);
                correctGuess = true;
            }
        }

        const playAgainResponse = prompt("Would you like to play again? (y/n)").toLowerCase();
        playAgain = playAgainResponse === 'y';
    }

    alert("Thanks for playing! Have a great day!");
}

// Oracle Game
function consultOracle() {
    const answers = [
        "Yes", 
        "No", 
        "Definitely", 
        "Ask again later", 
        "Not likely", 
        "Certainly", 
        "Impossible", 
        "Absolutely"
    ];

    while (true) {
        const question = prompt("Ask the oracle a yes/no question (or type 'stop' to exit):");
        if (!question || question.toLowerCase() === 'stop') {
            alert("Thanks for consulting the Oracle! Goodbye!");
            break;
        }

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        alert(`The Oracle says: "${randomAnswer}"`);
    }
}

// Bear Ninja Hunter Game
function playBearNinjaHunter() {
    const choices = ["Bear", "Ninja", "Hunter"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name:");
    if (!playerName) {
        alert("No name entered. Exiting game.");
        return;
    }

    const playerChoice = prompt("Choose your character: Bear, Ninja, or Hunter").trim();
    if (!choices.includes(playerChoice)) {
        alert("Invalid choice! Please choose Bear, Ninja, or Hunter.");
        return;
    }

    let resultMessage = `${playerName}, you chose ${playerChoice}. The computer chose ${computerChoice}.`;
    let winnerMessage;

    if (playerChoice === computerChoice) {
        winnerMessage = "It's a Tie!";
    } else if (
        (playerChoice === "Bear" && computerChoice === "Ninja") ||
        (playerChoice === "Ninja" && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Bear")
    ) {
        winnerMessage = `${playerName} Wins!`;
    } else {
        winnerMessage = "Computer Wins!";
    }

    alert(`${resultMessage}\n${winnerMessage}`);
}
