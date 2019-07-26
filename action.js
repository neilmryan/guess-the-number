//alert("JS is working!");

let guesses = [];
let random = randomNumber();
let gameWon = false;
let num_of_guesses = 3;

// Generate a random number between 1 & 100 inclusive
function randomNumber() {
    num = Math.floor(Math.random() * 100) + 1;
    return num;
};
// Start the game and check game state
function gamePlay() {
    while (guesses.length < num_of_guesses && !gameWon) {
        turn();
    };
    if (gameWon) {
        playAgain();
    } else {
        alert("You have reached " + num_of_guesses + " guesses. GAME OVER!");
        playAgain();   
    };
};

// function to execute a single turn of the game
function turn() {
    let guess = prompt("What is your number to guess?");
    guess = Number(guess);
    checkGuess(guess);
    guesses.push(guess);
    console.log(guesses);
};

// compare input guess value against the random number
function checkGuess(num) {
    if (num === random) {
        alert("YOU GUESSED IT! CONGRATULATIONS!");
        gameWon = true;

    } else if (num > random) {
        alert("WRONG! Your number is too high!");
        console.log(num);
        console.log(random);
    } else { 
        alert("WRONG! Your number is too low!");
        console.log(num);
        console.log(random);
    };
};

function playAgain() {
    let choice = prompt("Would you like to play again?: (Y/N)");
    console.log(choice);
    if (choice === "Y" || choice === "y") {
        guesses.length = 0;
        gameWon = false;
        gamePlay();
    } else {
        alert("Have a wonderful day!");
    }
};
