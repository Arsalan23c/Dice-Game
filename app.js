
    // Generate a random secret number between 1 and 6
    const secretNumber = Math.floor(Math.random() * 6) + 1;

    let chances = 2;
    let points = 0;

    function checkGuess() {
        const guess = parseInt(document.getElementById('guess').value);

        if (guess === secretNumber) {
            points = chances === 2 ? 6 : 3;
            displayOutput(`Congratulations! You guessed it right in ${3 - chances} attempt(s). You get ${points} points.`);
        } else {
            chances--;
            if (chances === 0) {
                displayOutput(`Sorry, you've run out of chances. The secret number was ${secretNumber}. You've failed.`);
            } else {
                displayOutput(`Wrong guess! Try again. Chances left: ${chances}.`);
            }
        }
    }

    function displayOutput(message) {
        document.getElementById('output').textContent = message;
    }