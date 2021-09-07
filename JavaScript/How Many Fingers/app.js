const guess = document.querySelector('#guessCheck');

guess.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let guessNumber = guess.value;
    if (guessNumber == randomNumber) {
        alert('You guessed the correct number');
    } else {
        alert(`You guessed the wrong number, the number was ${randomNumber}`);
    }
});