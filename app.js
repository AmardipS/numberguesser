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
    guessesLeft = 3;
    // Random draw for the winningNum between min and max
    winningNum = Math.floor(Math.random()*(max-min+1)+min);
    //winningNum = 2;

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
    console.log(winningNum);

    // Validate the input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else{
        // Check the winning number
        if(guess === winningNum){
            gameWon(true, `${winningNum} is correct, YOU WON!!!`);

            // Play again
            playAgain();
        } else{
            // Guesses counter & Game over
            guessesLeft--;
            if(guessesLeft === 0){
                gameWon(false, `Game Over!, the winning number is ${winningNum}`);

                // Play again
                playAgain();
            } else{
                setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, "red");
            }
        }
    } 
});

// Game over
function gameWon(won, msg){
    let color;
    won === true ? color = "green" : color = "red";

     // Disable the input field
    guessInput.disabled = true;
     // Set the input border green
    guessInput.style.borderColor = color;
     // Set winning message
    setMessage(msg, color);
}

// Set message
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

// Play Again
function playAgain(){
    guessBtn.value = 'Play again';
    guessBtn.addEventListener('click', function(){
        location.reload();
    });
}