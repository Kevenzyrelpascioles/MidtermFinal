




let targetNumber;
let chances = 3;

function startGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
    document.getElementById('retryButton').disabled = true;
    document.getElementById('feedback').innerText = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }

    chances--;

    if (userGuess === targetNumber) {
        document.getElementById('feedback').innerText = 'Congratulations! You guessed the correct number.';
        document.getElementById('retryButton').disabled = false;
    } else if (chances === 0) {
        document.getElementById('feedback').innerText = `Sorry, you ran out of chances. The correct number was ${targetNumber}.`;
        document.getElementById('retryButton').disabled = false;
    } else {
        document.getElementById('feedback').innerText = `Wrong guess. ${chances} chances remaining.`;
    }
}

function retryGame() {
    startGame();
}
