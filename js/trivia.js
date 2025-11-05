
const questionDiv = document.querySelector('#question');
const answerDiv = document.querySelector('#answer');
const feedbackDiv = document.querySelector('#feedback');


const questionBtn = document.querySelector('#questionBtn');
questionBtn.addEventListener('click', () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
        .catch((error) => {
            console.error(error);
        })
})

const answerBtn = document.querySelector('#answerBtn');
answerBtn.addEventListener('click', () => {
    let feedbackMessage;
    const userAnswer = answerDiv.value.trim().toLowerCase();
    console.log(userAnswer, currentQuestion.answer);
    if(currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
        feedbackDiv.style.color = 'green';
        feedbackMessage = `Great Job. Your answer is correct!`
    } else {
        feedbackDiv.style.color = 'red';
        feedbackMessage = `Sorry, that is incorrect. The correct answer is "${currentQuestion.answer}". Try another question.`
    }
    feedbackDiv.textContent = feedbackMessage;
})


let currentQuestion = null;


//Fetch trivia question

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length)
            const question = questions[index];
            if (index > questions.length) {
                reject(`An error occured while fetching trivia question.`)
            } else {
                resolve(question);
            }
        }, 1000)
    });
}

//Display trivia question

function displayQuestion(triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = "";
    feedbackDiv.textContent = "";
}



