
// DISPLAY DIVS ELEMENtS
const questionDiv = document.querySelector('#question');
const answerDiv = document.querySelector('#answer');
const output = document.querySelector('#output')
let count = 0;
let points = 0

// QUESTION BUTTON
const questionBtn = document.querySelector('#questionBtn');
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
    window.removeEventListener('keydown', handleQuestionEnter);
    window.addEventListener('keydown', handleAnswerEnter);
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
        answerDiv.focus();
    })
        .catch((error) => {
            console.error(error);
        })
}

// SUBMIT ANSWER BUTTON
const answerBtn = document.querySelector('#answerBtn');
answerBtn.addEventListener('click', submitAnswer) 
    

// SUBMIT ANSWER BTN FUNTION
function submitAnswer()    {
    window.removeEventListener('keydown', handleAnswerEnter);
    window.addEventListener('keydown', handleQuestionEnter);
    answerDiv.value = "";
    answerDiv.placeholder = 'Try another question!'
    
    const userAnswer = answerDiv.value.trim().toLowerCase();
    console.log(userAnswer, currentQuestion.answer);
    if(currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
        points++;
        count++;
        output.textContent = `Great Job. Your answer is correct!\nYou have won ${points} points so far out of ${count} questions.`
        output.style.border = '1px solid green';
        
    } else {
        count++;
        output.textContent = `Sorry, ${userAnswer} is incorrect. The correct answer is "${currentQuestion.answer}".\nYou have won ${points} points out of ${count} questions.\nTry another question.`;
        
        output.style.border = '1px solid red';
        
    }
    
}


let currentQuestion = null;


// FETCH TRIVIA QUESTION

function getTriviaQuestion() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length)
            const question = questions[index];
            answerDiv.placeholder = 'Your answer here'
            if (index > questions.length) {
                reject(`An error occured while fetching trivia question.`)
            } else {
                resolve(question);
            }
        }, 1000)
    });
}

// DISPLAY QUESTION BUTTON

function displayQuestion(triviaQuestion) {
    answerBtn.focus();
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = "";
    output.style.border = '';
    output.textContent = '';
    
}



