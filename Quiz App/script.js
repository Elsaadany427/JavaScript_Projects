const quizData = [{
        question: 'How old are hatem ? ',
        a: '10',
        b: '17',
        c: '20',
        d: '62',
        correct: 'c',
    },
    {
        question: 'What is The best Programmig Language in 2019?',
        a: 'Python',
        b: 'c++',
        c: 'c',
        d: 'Java',
        correct: 'd',
    },
    {
        question: 'Which is the Best Club in the world?',
        a: 'Payarn',
        b: 'Real Madried',
        c: 'Manchister',
        d: 'Totenham',
        correct: 'a',
    },
    {
        question: 'What does html stand for?',
        a: 'Hypertext markup language',
        b: 'cascading style sheet',
        c: 'object orianted',
        d: 'Application programming interface',
        correct: 'a',
    },
    {
        question: 'What year was js launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd',
    },
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuestion];

    questionE1.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitbtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }

});