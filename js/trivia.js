
// DISPLAY DIVS ELEMENtS
const questionDiv = document.querySelector('#question');
const answerDiv = document.querySelector('#answer');
const output = document.querySelector('#output')
const category = document.querySelector('#category');
const difficulty = document.querySelector('#difficulty');
const questionBtn = document.querySelector('#questionBtn');
const answerBtn = document.querySelector('#answerBtn');



let url = ``;
let results; // will become array of objects with trivia questions

let index = 0;
let count = 0;
let points = 0;
let currentQuestion = null;
let singleQData;
let userAnswer;
let decodedQuestion;
let decodedCorrect;

// START GAME BUTTON
const startGameBtn = document.querySelector('#start-game-button');
startGameBtn.addEventListener('click', startGame);

function handleStartGameEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        startGameBtn.click();
    }
}

window.addEventListener('keydown', handleStartGameEnter)

function assembleUrl(category, difficulty) {
    const diffValue = difficulty.value;
    const categoryValue = category.value;
    url = `https://opentdb.com/api.php?amount=20&category=${categoryValue}&difficulty=${diffValue}&type=multiple`;
    // console.log(url);
}

function decodeHTML(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
}

async function startGame() {
    window.removeEventListener('keydown', handleStartGameEnter)
    // get data
    assembleUrl(category, difficulty);
    //TRY AND CATCH HERE

    try {
        const response = await fetch(url);
        const data = await response.json();
        results = data.results;
        // console.log(results);
        // window.results = results;
        if (results.length === 0) {
            throw new Error(`Error fetching data`)
        }
    } catch(error) {
        console.error('Error fetching quiz data', error)
        output.innerHTML = 'Sorry, we could not load your questions. Please refresh and try again.';
        questionDiv.innerHTML = `Sorry, we could not load your questions. Please refresh and try again.`;
        startGameBtn.style.display = 'none';
        questionBtn.style.display = 'block';

        questionBtn.textContent = 'Reset Game'
        questionBtn.removeEventListener('click', newQuestion);
        questionBtn.addEventListener('click', () => {
            location.reload();
        });
        answerBtn.style.display = 'none';
        return;
    }


    // remove/add buttons update instructions
    questionBtn.style.display = "inline";
    answerBtn.style.display = "none";
    startGameBtn.style.display = "none";
    questionDiv.textContent = 'Press "Enter" or click "New Question" to proceed.';
    category.disabled = true;
    difficulty.disabled = true;



}



// QUESTION BUTTON

questionBtn.addEventListener('click', newQuestion)


// ENTER BTN FUNCTIONALIST
function handleQuestionEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        questionBtn.click()
    }
}

function handleAnswerEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        answerBtn.click();
    }
}

window.addEventListener('keydown', handleQuestionEnter)

// QUESTION BTN FUNCTION
function newQuestion() {

    answerDiv.value = "";
    output.style.border = "";
    questionBtn.style.display = "none";
    answerBtn.style.display = "inline";

    if (index === 19) {
        answerBtn.style.display = 'none';
        questionBtn.style.display = "inline";
        answerDiv
        questionBtn.textContent = 'Reset Game'
        questionBtn.removeEventListener('click', newQuestion);
        questionBtn.addEventListener('click', () => {
            location.reload();
        })
        output.innerHTML = `Great Job! You answered ${points} correctly questions out 20 questions!\nTry again?`;
        questionDiv.textContent = 'Refresh to try another round.';
        answerDiv.placeholder = "";
        answerDiv.disabled = true;
        return;
    }

    window.removeEventListener('keydown', handleQuestionEnter);
    window.addEventListener('keydown', handleAnswerEnter);
    answerDiv.placeholder = 'Your answer here';
    singleQData = results[index];
    const question = results[index].question
    questionDiv.innerHTML = `${question}`;
    index++;

    answerDiv.focus();
    currentQuestion = question;
    // console.log(currentQuestion);
    decodedCorrect = decodeHTML(singleQData.correct_answer);
    // console.log(decodedCorrect.toLowerCase());
    output.textContent = "";

}


// SUBMIT ANSWER BUTTON

answerBtn.addEventListener('click', submitAnswer)


// SUBMIT ANSWER BTN FUNTION
function submitAnswer() {
    window.removeEventListener('keydown', handleAnswerEnter);
    window.addEventListener('keydown', handleQuestionEnter);
    questionBtn.style.display = "inline";
    answerBtn.style.display = "none";
    count++;

    userAnswer = answerDiv.value.trim().toLowerCase();
    // console.log(userAnswer, decodedCorrect.toLowerCase());
    if (currentQuestion && userAnswer === decodedCorrect.toLowerCase()) {
        points++;
        output.innerHTML = `Great Job. Your answer is correct!\nYou have won ${points} points so far out of ${count} questions.`
        output.style.border = '1px solid green';

    } else {
        output.innerHTML = `Sorry, "${userAnswer}" is incorrect. The correct answer is "${singleQData.correct_answer}".\nYou have won ${points} points out of ${count} questions.\nTry another question.`;

        output.style.border = '1px solid red';

    }
    answerDiv.value = "";
    answerDiv.placeholder = 'Try another question!'



}










// DISPLAY QUESTION BUTTON





// Set up buttons, difficulty setting, and category pick DONE
// Button press =>
// Assemble the fetch URL with a difficulty variable, a category variable, and 20 questions. DONE
// Display question, check user input against the correct answer, 
// Display correctness to the user
// Cycle through the array in index order and disl
// Display first question
// 
//
// function to assemble url
// function to fetch the url
// function to cycle through the array
// function to display the current array
// function to check the correctness of the answers
// function to progress to the next question
// function to reset the game
//
//
//
//
