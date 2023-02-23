// Quiz that will loop
var startButton= document.getElementById('beginQuiz');
console.log(startButton)
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

var index = 0; //starts at 0, and goes up to questions.length 

function showQuiz(event){ //is going to be called display quiz questions either when quiz is started or once answer is selcelted.
    // we are going to check the index of the current question
    //  create queryselectors for the following quizanswer buttons
    event.preventDefault();
    
    var button1 = document.getElementById('quizAnswers1');
    console.log(button1)
    var button2 = document.getElementById('quizAnswers2');
    var button3 = document.getElementById('quizAnswers3');
    var button4 = document.getElementById('quizAnswers4');
    // display the question based off of the choices from the question
    var  currentQuestion = questions[index];
    for(var i=0; i<4; i ++){ //iterate chocies array to display buttons
         var currentbutton = document.getElementById(`quizAnswers${i+1}`);
         console.log(currentbutton)
         currentbutton.textContent = currentQuestion.choices[i];
         currentbutton.style['display'] = 'block'

    }
   
   
    // display the current question to HTML
  
    // if(correct){
        // score ++ or time -=10
    
    // }
    // add to index; 
    index++

    // if(index> questions.length){
//          end quiz()
    // }

    showQuiz
    }




function checkAnswer(){
    // this function is going to compare the selected answer to the correct one of currentQuestion
index++
showQuiz()
}
startButton.addEventListener('click', showQuiz )