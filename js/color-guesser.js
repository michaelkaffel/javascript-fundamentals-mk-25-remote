const COLORS_ARRAY = [
        "blue",
        "cyan",
        "gold",
        "gray",
        "green",
        "magenta",
        "orange",
        "olive",
        "red",
        "yellow",
      ];

      function runColorGame() {
        let guess = "";
        let correct = false;
        let targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
        let target = COLORS_ARRAY[targetIndex];
        let numTries = 0;

        do {
          guess = prompt(
            `I am thinking of one of these colors:\n\n${COLORS_ARRAY.join(
              ", "
            )}\n\nGuess which color am I thinking of!\n`
          );
          numTries++;
          if (guess === null) {
            alert(
              "It doesnt look like you entered anything.\n\nLets start over."
            );
            console.log(
              "It doesnt look like you entered anything.\n\nLets start over."
            );
            return;
          }
          let guessLowerCase = guess.toLowerCase();
          correct = checkGuess(guessLowerCase, target);
        } while (!correct);
        alert(
          `You guessed the correct color: ${target}.\n\nIt took you this many guesses: ${numTries}`
        );
        const output = document.getElementById("output");
        output.textContent = `You guessed the correct color!\n\nIt was ${target}!\n\nIt only took you ${numTries} guesses.`;
        document.body.style.backgroundColor = target;
        output.style.border = "2px solid";
        output.style.borderColor = target;
      }

      function checkGuess(guess, target) {
        let correct = false;
        if (!COLORS_ARRAY.includes(guess)) {
          alert("You did not choose from the list of colors.");
        } else if (guess === "") {
          alert(`You didnt enter anything!`);
        } else if (guess > target) {
          alert(
            'Your guess is alphabetically higher than target.\n\nHint: "A" is alphabetically lower than "Z".'
          );
        } else if (guess < target) {
          alert(
            'Your guess is alphabetically lower than target\n\nHint: "A" is alphabetically lower than "Z".'
          );
        } else {
          correct = true;
        }
        return correct;
      }


// const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'olive', 'red', 'yellow']





// function runColorGame() {
//     let guess = "";
//     let correct = false;
//     let targetIndex = Math.floor(Math.random() * (COLORS_ARRAY.length));
//     let target = COLORS_ARRAY[targetIndex];
//     let numTries = 0;

//     do {
//         guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY + '\n\nGuess which color am I thinking of?\n');
//         guess = guess.toLowerCase();
//         numTries++;
//         if (guess === null) {
//             alert('It doesnt look like you entered anything.\n\nLets start over.');
//             console.log('It doesnt look like you entered anything.\n\nLets start over.');
//             return;
//         }
//         correct = checkGuess(guess, target);

//     } while (!correct);
//     alert(`You guess the correct color: ${target}.\n\nIt only took you ${numTries} guesses.`);
//     const output = document.getElementById('output');
//     output.textContent = `You guessed the correct color!\n\nIt was ${target}!\n\nIt only took you ${numTries} guesses.`;
//     document.body.style.backgroundColor = target;

// }

// function checkGuess(guess, target) {
//     let correct = false;
//     if (!COLORS_ARRAY.includes(guess)) {
//         alert('You did not choose from the list of colors.')
//     } else if (guess > target) {
//         alert('Your guess is alphabetically higher than target.\n\nHint: "A" is alphabetically lower than "Z".')
//     } else if (guess < target) {
//         alert('Your guess is alphabetically lower than target\n\nHint: "A" is alphabetically lower than "Z".')
//     } else {
//         correct = true;
        
//     }
//     return correct
// }





