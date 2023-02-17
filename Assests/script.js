var pEl = document.createElement('<p>');
var h1El = document.createElement('h1');
var btnEl = document.createElement('button');
var headEl = document.createElement('header');
var mainEl = document.createElement('main');

// Create ordered list
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

// Creating 



// <p> attributes will be selected and have the same styling by using attribute stylying in JS
// <li> attributes will be styled using attribute styling in JS
// Time intervals will be set and decremented using JS
// Preventing default will be will be set using JS

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