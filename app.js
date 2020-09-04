/* 
GAME Functions:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player about remaining guesses
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess input
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

// Validate the input
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
});

// Set message
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}