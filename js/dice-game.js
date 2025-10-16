function rollDice() {
    let goldCoins = 0;

    //this starts to roll a dice 10 times
    for (i = 0; i < 10; i++) {

        const roll = Math.floor(Math.random() * 6) + 1;;
        alert(`You rolled a ${roll}`);

        if (roll === 1) {
            alert(`Game over, no more rolls!`);
            break;

        } else if (roll < 4) {
            continue;

        } else if (roll === 4 && goldCoins) {
            goldCoins--;
            alert(`You lost a coin! You now have ${goldCoins} coins.`)
            continue;

        } else if (roll === 5) {
            alert(`Congratulations, you win 5 gold coins!`);
            goldCoins += 5;
            alert(`Gold coins collected: ${goldCoins}`);
            continue;

        } else if (roll === 6) {
            alert(`Congratulations, you win 6 gold coins!`);
            goldCoins += 6;
            alert(`Gold coins collected: ${goldCoins}`);
            continue;
        } else { continue }

    }
    const output = document.getElementById('output');
    output.textContent = `End of game total is : ${goldCoins}`;
    alert(`End of game total is : ${goldCoins}`);
}