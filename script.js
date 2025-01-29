// Get DOM elements
const submitButton = document.getElementById('submit-guess');
const userGuessInput = document.getElementById('user-guess');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const restartButton = document.getElementById('restart');

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(userGuessInput.value); // Get the user's guess
  attempts++; // Increment the attempt count
  attemptsElement.textContent = attempts; // Update attempts displayed

  // Check if the guess is correct, too high, or too low
  if (userGuess === randomNumber) {
    messageElement.textContent = 'Congratulations! You guessed it!';
    messageElement.style.color = 'green';
    restartButton.style.display = 'block'; // Show the "Play Again" button
  } else if (userGuess < randomNumber) {
    messageElement.textContent = 'Too low! Try again.';
    messageElement.style.color = 'red';
  } else if (userGuess > randomNumber) {
    messageElement.textContent = 'Too high! Try again.';
    messageElement.style.color = 'red';
  }
}

// Handle the submit button click
submitButton.addEventListener('click', function () {
  if (!userGuessInput.value) {
    messageElement.textContent = 'Please enter a valid number!';
    messageElement.style.color = 'red';
    return;
  }
  checkGuess();
});

// Handle the restart button click
restartButton.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
  attempts = 0; // Reset attempts count
  attemptsElement.textContent = attempts; // Update attempts displayed
  messageElement.textContent = ''; // Clear the message
  userGuessInput.value = ''; // Clear the input field
  restartButton.style.display = 'none'; // Hide the "Play Again" button
});
