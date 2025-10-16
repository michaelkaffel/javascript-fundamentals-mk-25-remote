function runGame() {

    //generate random number
    const target = Math.floor(Math.random() * 100) +1

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

  
    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?');
        //attempt to convert the datatype of guessString to a number and store that in guessNumber. Will be NaN if string is not convertable
        guessNumber = +guessString;
        //keep track of number of loops/guesses
        numTries++;
        //function where the actual checking happens
        correct = checkGuess(guessNumber, target)
    } while (!correct);

    alert('You got it! The number was ' + target + '. \n\nIt took you ' + numTries + ' tries to guess correctly');


}

function checkGuess(guessNumber, target) {
    let correct = false;
    //checkes if guessNumber datatype is NaN due to guessString not being a number
    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');

    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');

    } else if (guessNumber > target) {
        alert('Your number is too large!'); 

    } else if (guessNumber < target) {
        alert('Your number is too small');

    } else {
        correct = true;
    }
    return correct;
}