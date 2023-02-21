// Display
function ShowQuiz(){
    let beginQuiz = document.getElementById('#beginquiz');
    let start = document.getElementById('#start')
    
        beginQuiz.addEventListener('click', ('#start'));
        start(style.display) = 'none'
    // Button behavior
}
      

// Quiz Questions 
let Question1 = Q1 
function Q1 (){
    document.querySelector('Q1');
}
let Question2 = Q2
function Q2 (){
    document.querySelector('Q2');
}
let Question3 = Q3
function Q3 (){
    document.querySelector('Q3');
}
let Question4 = Q4
function Q4 (){
    document.querySelector('Q4');
}
let Question5 = Q5
function Q5 (){
    document.querySelector('Q5');
}
document.querySelector('.container'); 

//Quiz Choices
let Choices1 = C1 
function C1 (){
    document.querySelector('C1');
}
let Choices2 = C2 
function C2 (){
    document.querySelector('C2');
}
let Choices3 = C3
function C3 (){
    document.querySelector('C3');
}
let Choices4 = C4 
function C4 (){
    document.querySelector('C4');
}
let Choices5 = C5 
function C5 (){
    document.querySelector('C5');
}

// Quiz Answers
let Answers1 = A1
function A1 (){
    document.querySelector('A1');
}
let Answers2 = A2
function A2 (){
    document.querySelector('A2');
}
let Answers3 = A3
function A3 (){
    document.querySelector('A3');
}
let Answers4 = A4
function A4 (){
    document.querySelector('A4');
}
let Answers5 = A5
function A5 (){
    document.querySelector('A5');
}
//contains quiz question elements



// Quiz question variables 
let tilte = document.getElementById('#title'); //Quiz quetions
let choices = document.getElementById('#choices') ;//Quiz quetions
let answers = document.getElementById('#answers'); //Quiz answers

// Quiz that will loop
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

// For loop for questions
for (i=0; i<questions.length; i++){
    console.log("title",questions[i].title);
    Q1.textContent=questions[i].title;
}
// For loop for choices
for (i=0; i<questions.length; i++){
    console.log("choices",questions[i].choices);
    C1.textContent=questions[i].choices;
}
// For loop for choices
for (i=0; i<questions.length; i++){
    console.log("answer",questions[i].answer);
    A1.textContent=questions[i].answer;
}

