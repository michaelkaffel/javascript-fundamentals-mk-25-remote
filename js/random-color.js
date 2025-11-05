
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', changeColor)
colorBtn.addEventListener('mouseover', btnColorChange)
colorBtn.addEventListener('mouseout', btnColorChangeBack)

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetColor)




function hexCodeGenerator() {
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",]
    let hexCode = "#";
    
    for (let i = 0; i < 6; i++) {
        let charIndex = Math.floor(Math.random()*16);
        hexCode += hexChars[charIndex];
    }
    
    return hexCode;
}

function changeColor() {
    const color =  hexCodeGenerator();
    document.getElementById('output-color-generator').style.backgroundColor = color;
    document.getElementById('colorCode').innerHTML = color;
}

function resetColor() {
    document.getElementById('output-color-generator').style.backgroundColor = '#ffffff';
     document.getElementById('colorCode').innerHTML = "#FFFFFF";
}

function btnColorChange () {
    colorBtn.style.backgroundColor = "blue";
}

function btnColorChangeBack () {
    colorBtn.style.backgroundColor = "buttonface";
}





