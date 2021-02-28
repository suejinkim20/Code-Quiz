//Quiz question elements
var questionEL = document.getElementById("question-box")
var questions = [
    {
        prompt: "Common data types DO NOT include:",
        choices: ["boolean", "array", "taxes", "string"],
        answer: 2 //index number of correct answer
    },
    {
        prompt: "Classes are denoted by a ______ selector in CSS.",
        choices: ["asterisk *", "hash #", "period .", "backslash /"],
        answer: 2 //index number of correct answer
    },
    {
        prompt: "HTML tags are enclosed in ______.",
        choices: ["square brackets []", "angle brackets <>", "curly braces {}", "parentheses ()"],
        answer: 1 //index number of correct answer
    },
]
var correctAnswer = "";

//Display Pages
var startPageEl = document.getElementById("landing-page")
var questionPageEl = document.getElementById("question-page")
var finalScorePageEl = document.getElementById("final-score-page")
var buttonDivEl = document.getElementsByClassName("button-div")

//Button Elements
var startBtnEl = document.getElementById("startBtn")
var page = 0;
var submitBtnEl = document.getElementById("submitBtn")

//Timer
var timeEl = document.querySelector(".time");
var secondsLeft = 100;

function setTime() {
    var timerInterval = setInterval
    (
        function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
  
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
      }
    }, 1000

    )
    ;
  }
  

function sendMessage(){
    console.log("your time is up!")
}

//Quiz begins
function init() {
    startPageEl.style.display="block";
    questionPageEl.style.display="none";
    finalScorePageEl.style.display="none";
}

function displayQuestions() {
    setTime();
    var questionPromptEl = document.getElementById("question");
    var choiceAEl = document.getElementById("choice-a");
    var choiceBEl = document.getElementById("choice-b");
    var choiceCEl = document.getElementById("choice-c");
    var choiceDEl = document.getElementById("choice-d");
    var questionsIndex = 0

    questionPageEl.style.display="block";
    startPageEl.style.display="none";

    switch (questionsIndex) {
        case 0:
        questionPromptEl.textContent = questions[0].prompt;
        choiceAEl.textContent = questions[0].choices[0];
        choiceBEl.textContent = questions[0].choices[1];
        choiceCEl.textContent = questions[0].choices[2];
        choiceDEl.textContent = questions[0].choices[3];
        
        correctChoice = questions[0].answer;
        questionsIndex = questionsIndex + 1;

        break;

        case 1:
        questionPromptEl.textContent = questions[1].prompt;
        choiceAEl.textContent = questions[1].choices[0];
        choiceBEl.textContent = questions[1].choices[1];
        choiceCEl.textContent = questions[1].choices[2];
        choiceDEl.textContent = questions[1].choices[3];

        correctChoice = questions[1].answer;
        questionsIndex = questionsIndex + 1;

        break;

        case 2:
        questionPromptEl.textContent = questions[2].prompt;
        choiceAEl.textContent = questions[2].choices[0];
        choiceBEl.textContent = questions[2].choices[1];
        choiceCEl.textContent = questions[2].choices[2];
        choiceDEl.textContent = questions[2].choices[3];

        correctChoice = questions[2].answer;
        questionsIndex = questionsIndex + 1;

        case 3:
        questionPromptEl.textContent = questions[3].prompt;
        choiceAEl.textContent = questions[3].choices[0];
        choiceBEl.textContent = questions[3].choices[1];
        choiceCEl.textContent = questions[3].choices[2];
        choiceDEl.textContent = questions[3].choices[3];

        correctChoice = questions[3].answer;
        questionsIndex = questionsIndex + 1;
        break;
    }
}


var score = "" //score will be (correct question total * 10) + time left
function gotRight() {
    //when the player clicks the button with the correct answer, the computer will increase the score by 10
}


startBtnEl.addEventListener("click", displayQuestions)
init()


//need to store questions in the local storage?
//localStorage.setItem("quiz-questions", JSON.stringify(questions));

//then get items to populate 
//var lastQuestion = JSON.parse(localStorage.getItem("quiz-questions"));

