// // Display
function ShowQuiz(){
    var beginQuiz = 'beginQuiz';
    var start = 'start';
    
         start = document.getElementById('#start');
         beginQuiz = document.getElementById('#beginquiz');
    }
    
        beginQuiz.addEventListener('click', ('#start'));
        start(style.display) = 'none'


// Quiz Questions 
let Question1 = Q1 
let Question2 = Q2
let Question3 = Q3
let Question4 = Q4
let Question5 = Q5
document.querySelector('.container'); //contains quiz question elements
document.querySelector('Q1'); // Quiz question 1 
document.querySelector('Q2'); // Quiz question 2 
document.querySelector('Q3'); // Quiz question 3 
document.querySelector('Q4'); // Quiz question 4 
document.querySelector('Q5'); // Quiz question 5


// Quiz question variables 
let tilte = tilte
let choices = choices
let answers = answers

document.getElementById('title'); //Quiz quetions
document.getElementById('choices'); //Quiz choices
document.getElementById('answers'); //Quiz answers

const questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'boolean', 'alerts', 'numbers'],
        answer: 'booleans'
    },
    {
        title: 'The condition in an if/else statement is enclosed with ___________ .',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'parentheses'
    },
    {
        title: 'Arrays in JavaSrcipt can be used to store ________ .',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within _______ when assisging variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminial bash', 'for loops', 'console.log'],
        answer: 'console.log'

    },
];

for (i=0; i<questions.length; i++){
    console.log("title",questions[i].title);
    questionEl.textContent=questions[i].title;
}
