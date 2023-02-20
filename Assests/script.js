// Creating different P tags 
var pEl = document.createElement('p');
var p2El = document.createElement('p');
var p3El = document.createElement('p');
var p4El = document.createElement('p');
var p5El = document.createElement('p');
var p6El = document.createElement('p');

// Various HTML tags and elements
var h1El = document.createElement('h1');
var btnEl = document.createElement('div');
var headEl = document.createElement('header');
var mainEl = document.createElement('main');

// Button variable
var generateBtn = document.querySelector("")

// Create ordered list
var Oli1 = document.createElement('ol');
var Oli2 = document.createElement('ol');
var Oli3 = document.createElement('ol');
var Oli4 = document.createElement('ol');

// Appending tags and elements to HTML
// Paragraphs 
// body.appendchild(pEl);
// body.appendchild(p2El);
// body.appendchild(p3El);
// body.appendchild(p4El);
// body.appendchild(p5El);
// body.appendchild(p6El);
// // List
// body.appendchild(Oli1);
// body.appendchild(Oli2);
// body.appendchild(Oli3);
// body.appendchild(Oli4);
// // Button
// body.appendchild(btnEl);
// // Header
// body.appendchild(headEl);


// Creating text content for each quiz question
pEl.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!';
p2El.textContent = 'Commonly used data types DO NOT include:';
p3El.textContent = 'The condition in an if/else statement is enclosed with ___________ .'
p4El.textContent = 'Arrays in JavaSrcipt can be used to store ________ .'
p5El.textContent = 'String values must be enclosed within _______ when assisging variables.'
p6El.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:'

// Question 1 answers
Oli1.textContent = 'strings'
Oli2.textContent = 'boolean'
Oli3.textContent = 'alerts'
Oli4.textContent = 'numbers'

// Question 2 answers 
Oli1.textContent = 'quotes'
Oli2.textContent = 'curly brackets'
Oli3.textContent = 'parentheses'
Oli4.textContent = 'square brackets'

// Question 3 answers 
Oli1.textContent = 'numbers and strings'
Oli2.textContent = 'other arrays'
Oli3.textContent = 'booleans'
Oli4.textContent = 'all of the above'

// Question 4 answers
Oli1.textContent = 'commas'
Oli2.textContent = 'curly brackets'
Oli3.textContent = 'quotes'
Oli4.textContent = 'parentheses'

// Question 5 answers 
Oli1.textContent = 'JavaScript'
Oli2.textContent = 'terminial bash'
Oli3.textContent = 'for loops'
Oli4.textContent = 'console.log'


// Timer Creation 
var timeEl = document.querySelector('.time');

// Time by ID
var mainEl = document.getElementById('main');
var secondsLeft = 75

function setTime() {
    // Sets interval variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        // timeEl.textContent = secondsLeft + -function decleration must be completed once other functions and text elements have been input-;

        if(secondsLeft===0) {
            // stops timer at action of set interval 
            clearInterval(timerInterval);
            sendMessage();
        }

    
    },1000);
}


// p> attributes will be selected and have the same styling by using attribute stylying in JS
// li> attributes will be styled using attribute styling in JS
// Time intervals will be set and decremented using JS
// Preventing default will be will be set using JS
//  An intitial titile page must be shown ,call 'Coding Quiz Challenge' with detailed intructions about the demo 
//  body will consit of list elements sytles by CSS and given using JS API attributes to give inter activity 
//  5 ordered list must be added 
//  Opaue hover elements must be added to list items. 
//  Buttone elements will be used through the page  
//  Right or wrong will be displayed once a button is clicked with a horizontal line underneath the boolean 
//  User initials and highscore must be stored in local storage 
//  Preventing default refresh must be implemented on the form 
//  When you click 'Go Back' at the end of the quiz, you are taken back to the tilte screen 
//  All questions must be in p> elements/tags 
//  Timer must decrement by one second while test is running 
//  Upon wrong answer 17 seconds is subtracted from timer
//  BUttons need to have event 'click' listensers 
//  Event handling to start quiz over
//  Maybe data attributes? 