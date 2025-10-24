function runGame() {
    
    let guessString = "";
    let guessNumber = 0;
    let numTries = 0;
    correct = false;

    
    const target = Math.floor(Math.random() * 100 ) + 1;

    do {
        //get string number from user
        guessString = prompt("Please enter a number between 1-100");
        //coerce string to number datatype and store in new variable
        guessNumber = +guessString;
        //increment number of tries
        numTries++;
        //snarcky comment
        if (numTries === 4) alert('4 tries already, you arent very good at this...');
        //check for correctness
        correct = guessChecker(guessNumber, target);
        //will stay in loop so long as correct is not true, the ! flips it
    } while (!correct)
    
    alert(`Success`)
    const output = document.getElementById('output');
    output.textContent = `🎉 Congratulations 🎉\n\nYou guessed the correct number: ${target}\n\nIt only took you ${numTries} tries which isnt bad, i guess... Try again?`

}

function guessChecker(guessNumber, target) {
    if (isNaN(guessNumber)) {
        alert('It seems you did not enter a number.\n\nPlease try again.');
    } else if ((guessNumber < 0) || (guessNumber > 100)) {
        alert('It seems you entered a number outside of the correct range.\n\nPlease try again.');
    } else if (guessNumber > target) {
        alert('Your guess is to big!\n\nTry guessing a smaller number.');
    } else if (guessNumber < target) {
        alert('Your guess is to small!\n\nTry guessing a bigger number.');
    } else {correct = true}

    
    return correct;
}