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
let play_again = document.getElementById('play_again');
let again_button = document.createElement('button');
let label_inst = document.getElementById('label_inst');

//Event Listener to trigger checkGuess function on click.
$(guessSubmit).click(function(e) {
  guess = Number(guessField.value);
  turn(guess);
});
//Event Listener to trigger checkGuess function on kepress code "Enter".
$(guessField).keypress(function(e) {
  let key = e.code;
  if (key === "Enter") {
    guess = Number(guessField.value);
    turn(guess);
  }
});

// Generate a random number between 1 & 100 inclusive
function randomNumber() {
  num = Math.floor(Math.random() * 100) + 1;
  return num;
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
    guess_status.textContent = "YOU WIN! YOU GUESSED IT!";
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
  label_inst.textContent = "";
  guesses_left.style.visibility = "hidden";
  guess_record.visibility = "none";
  guess_status.visibility = "none";
  guessField.style.visibility = "hidden";
  guessSubmit.style.visibility = "hidden";
  play_again.classList.add("play_again");
  play_again.textContent = "Play again?";
  again_button.textContent = "Click Me";
  play_again.appendChild(again_button);
  $(again_button).click(function() {
    location.reload();
  })
};

//sets the cursor blinking in the inout field
$('.guessField').focus();
