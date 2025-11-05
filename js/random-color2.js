const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener('click', generateColor);

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset)

const colorOutput = document.querySelector('#colorOutput');
const colorCode = document.querySelector('#colorCode');




function generateColor() {
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        hexCode += hexChars[Math.floor(Math.random() * 16)]
    }

    colorOutput.style.backgroundColor = hexCode;
    colorCode.textContent = hexCode;
}

function reset() {
    colorOutput.style.backgroundColor = "#FFFFFF";
    colorCode.textContent = "#FFFFFF";
}


