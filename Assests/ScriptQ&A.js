document.getElementById('title'); //Quiz quetions
document.getElementById('choices'); //Quiz choices
document.getElementById('answers'); //Quiz answers
//document.getElementById(button).addEventListener('click', ("") );


document.querySelector('#header'); //element created for timer 
document.querySelector('.time'); //element created for timer 
//document.querySelector(main); //element created for timer 
//document.querySelector(button); //Buttons to be used throughout quiz 
document.querySelector('.container'); //contains quiz question elements
const questionEl = document.querySelector('.pEl'); // Quiz opening title page 
document.querySelector('.pE2'); // Quiz question 1 
document.querySelector('.pE3'); // Quiz question 2 
document.querySelector('.pE4'); // Quiz question 3 
document.querySelector('.pE5'); // Quiz question 4 
document.querySelector('.pE6'); // Quiz question 5

// // Display
var start = document.querySelector('#start');
var beginQuiz = document.querySelector('#beginquiz');

beginQuiz.addEventListener('click' , function()){ 
    start(style.display) = 'none'
}


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