

const gameBtn = document.querySelector('#game-button');
const diceImg = document.querySelector('#dice-image');
const output = document.getElementById('output');
const rollingDie = new URL('../images/dice-roll.gif', import.meta.url).href;
const die1 = new URL('/images/dice-1.png', import.meta.url).href;
const die2 = new URL('/images/dice-2.png', import.meta.url).href;
const die3 = new URL('/images/dice-3.png', import.meta.url).href;
const die4 = new URL('/images/dice-4.png', import.meta.url).href;
const die5 = new URL('/images/dice-5.png', import.meta.url).href;
const die6 = new URL('/images/dice-6.png', import.meta.url).href;

gameBtn.addEventListener('click', startGame)
let count = 10;
let goldCoins = 0;

function startGame() {
    console.log('startGame')
    gameBtn.removeEventListener('click', startGame);
    diceImg.src = rollingDie; 
    setTimeout(diceRoll, 2000)
}

function diceRoll() {
    
    console.log('diceRoll')
    gameBtn.removeEventListener('click', diceRoll)
    count--;
    let message = "";
    const roll = Math.floor(Math.random() * 6) + 1;
    switch (roll) {
        case 1:
            diceImg.src = die1;
            count = 0;
            message = "Uh Oh!"
            break;
        case 2:
            diceImg.src = die2;
            message = 'Roll again!';
            break;
        case 3:
            diceImg.src = die3;
            message = 'Roll again!';
            break;
        case 4:
            diceImg.src = die4;
            if (goldCoins > 0) {
                goldCoins--;
                message = 'You lost a coin';
            } else {
                message = 'Roll again!'
            }
            break;
        case 5:
            diceImg.src = die5;
            goldCoins += 5;
            message = 'You won 5 coins!';
            break;
        case 6:
            diceImg.src = die6;
            goldCoins += 6;
            message = 'You won 6 coins!';
            break;
    }
    gameBtn.textContent = 'Roll Again!';
    addEventListener('click', diceRoll);
    if (count > 0) {
         output.textContent = `${message}\nYou rolled a ${roll}. You have ${count} rolls left.\n You have ${goldCoins} gold coins.`;
    } else if (count === 0) {
        gameBtn.textContent = 'Reset Game';
        gameBtn.style.backgroundColor = "red";
        output.textContent = `Game over!\nYou rolled a ${roll}.\nYou have ${count} rolls left.\nYou have ${goldCoins} gold coins.`;
        gameBtn.addEventListener('click', resetGame);
    }
    
   
    return roll;
}

function resetGame() {
    window.location.reload();
    
}

// function rollDice() {
//     let goldCoins = 0;

    //this starts to roll a dice 10 times
//     for (let i = 0; i < 10; i++) {

//         const roll = Math.floor(Math.random() * 6) + 1;
//         alert(`You rolled a ${roll}`);

//         if (roll === 1) {
//             alert(`Game over, no more rolls!`);
//             break;

//         } else if (roll < 4) {
//             continue;

//         } else if (roll === 4 && goldCoins) {
//             goldCoins--;
//             alert(`You lost a coin! You now have ${goldCoins} coins.`)
//             continue;

//         } else if (roll === 5) {
//             alert(`Congratulations, you win 5 gold coins!`);
//             goldCoins += 5;
//             alert(`Gold coins collected: ${goldCoins}`);
//             continue;

//         } else if (roll === 6) {
//             alert(`Congratulations, you win 6 gold coins!`);
//             goldCoins += 6;
//             alert(`Gold coins collected: ${goldCoins}`);
//             continue;
//         } else { continue }

//     }
//     
//     output.textContent = `End of game total is : ${goldCoins}`;
//     alert(`End of game total is : ${goldCoins}`);
// }