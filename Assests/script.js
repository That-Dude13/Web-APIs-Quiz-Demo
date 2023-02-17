var pEl = document.createElement('p>');
var h1El = document.createElement('h1');
var btnEl = document.createElement('button');
var headEl = document.createElement('header');
var mainEl = document.createElement('main');

// Create ordered list
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

// Creating differ P tags for each quiz question





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
//  When you click "Go Back" at the end of the quiz, you are taken back to the tilte screen 
//  All questions must be in p> elements/tags 
//  Timer must decrement by one second while test is running 
//  Upon wrong answer 17 seconds is subtracted from timer
//  BUttons need to have event 'click' listensers 
//  Event handling to start quiz over
//  Maybe data attributes? 