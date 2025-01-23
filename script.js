// Function for the Guessing Game
function guessingGame() {
    let playAgain = true;

    while (playAgain) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let guess;
        let attempts = 0;
        let correctGuess = false;

        while (!correctGuess) {
            guess = parseInt(prompt("Guess a number between 1 and 10:"));
            if (isNaN(guess)) {
                alert("Please enter a valid number.");
                continue;
            }

            attempts++;

            if (guess > randomNumber) {
                alert("Too high! Try again.");
            } else if (guess < randomNumber) {
                alert("Too low! Try again.");
            } else {
                alert(`Correct! You guessed it in ${attempts} attempts.`);
                correctGuess = true;
            }
        }

        const playAgainResponse = prompt("Would you like to play again? (y/n)").toLowerCase();
        playAgain = playAgainResponse === "y";
    }

    alert("Thanks for playing the Guessing Game!");
}

// Function for Consult the Oracle
function consultTheOracle() {
    const answers = [
        "Yes",
        "No",
        "Definitely",
        "Ask again later",
        "Not likely",
        "Certainly",
        "Impossible",
        "Absolutely",
    ];

    let playAgain = true;

    while (playAgain) {
        const question = prompt("Ask the Oracle a yes/no question:");
        if (!question || question.trim() === "") {
            alert("Please ask a valid question.");
            continue;
        }

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        alert(`The Oracle says: ${randomAnswer}`);

        const playAgainResponse = prompt("Would you like to ask another question? (y/n)").toLowerCase();
        playAgain = playAgainResponse === "y";
    }

    alert("The Oracle bids you farewell!");
}

// Function for Bear Ninja Hunter
function bearNinjaHunter() {
    const choices = ["Bear", "Ninja", "Hunter"];
    const playerName = prompt("Welcome to Bear Ninja Hunter! What's your name?");
    if (!playerName || playerName.trim() === "") {
        alert("Please enter a valid name.");
        return;
    }

    let playAgain = true;

    while (playAgain) {
        const playerChoice = prompt("Choose your character: Bear, Ninja, or Hunter").trim();
        if (!choices.includes(playerChoice)) {
            alert("Invalid choice! Please choose Bear, Ninja, or Hunter.");
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let resultMessage;

        if (playerChoice === computerChoice) {
            resultMessage = "It's a Tie!";
        } else if (
            (playerChoice === "Bear" && computerChoice === "Hunter") ||
            (playerChoice === "Ninja" && computerChoice === "Bear") ||
            (playerChoice === "Hunter" && computerChoice === "Ninja")
        ) {
            resultMessage = `${playerName} Wins!`;
        } else {
            resultMessage = "Computer Wins!";
        }

        alert(
            `${playerName}, you chose ${playerChoice}. The computer chose ${computerChoice}.\n${resultMessage}`
        );

        const playAgainResponse = prompt("Would you like to play again? (y/n)").toLowerCase();
        playAgain = playAgainResponse === "y";
    }

    alert("Thanks for playing Bear Ninja Hunter!");
}
