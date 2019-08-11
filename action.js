//alert("JS is working!");

let guesses = [];
let random = randomNumber();
let gameWon = false;
let num_of_guesses = 5;
let guess = "";

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let guess_record = document.querySelector('#guesses');
let guess_status = document.querySelector('#guess_status');
let guesses_left = document.querySelector('#guesses_left');
let play_again = document.querySelector('h2');

$(guessSubmit).click(function (e) {
    guess = Number(guessField.value);
    turn(guess);
    //guessField.setAttribute("value", "");
});

// Generate a random number between 1 & 100 inclusive
function randomNumber() {
  num = Math.floor(Math.random() * 100) + 1;
  return num;
};
// Start the game and check game state
function gamePlay() {
  while (guesses.length < num_of_guesses && !gameWon) {

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
  checkGuess(guess);
  guesses.push(guess);
  guess_record.textContent = 'Your Guesses: ' + guesses;
};

// compare input guess value against the random number
function checkGuess(num) {
  if (num === random) {
    guess_status.textContent = "CONGRATULATIONS! YOU GUESSED THE NUMBER!";
    gameWon = true;
    playAgain();
  } else if (num > random) {
    guess_status.textContent = "WRONG, TOO HIGH!";
    console.log(num);
    console.log(random);
  } else {
    guess_status.textContent = "WRONG, TOO LOW!";
    console.log(num);
    console.log(random);
  };
  guessField.value = "";
  num_of_guesses--;
  guesses_left.textContent = "You have " + num_of_guesses + " guesses left!"
  if (!gameWon && num_of_guesses === 0) {
    guess_status.textContent = "NO MORE GUESSES GAME OVER!";
    playAgain();
  }
};

function playAgain() {
  alert("Play Again?");
};

//sets the cursor blinking in the inout field
$('.guessField').focus();


/*
$("body").hover(function() {
  $("body").css("color","blue");
});
*/
