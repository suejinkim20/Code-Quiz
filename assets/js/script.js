// Series of questions stored in an object. The answers and the questions will be accessable in that object.
var questions = [
    {
      prompt: "Common data types DO NOT include:",
      choices: ["boolean", "string", "taxes", "number"],
      answer: "taxes",
    },
    {
      prompt: "Classes are denoted by a ______ selector in CSS.",
      choices: ["asterisk", "hash", "period", "backslash"],
      answer: "period",
    },
    {
      prompt: "HTML tags are enclosed in ______.",
      choices: ["square brackets", "angle brackets", "curly braces", "parentheses"],
      answer: "angle brackets",
    },
    {
      prompt: "_________ is a series of statements that have been grouped together to perform a specific task. ",
      choices: ["An array", "A DOM element", "CSS", "A function"],
      answer: "A function",
    },
    {
      prompt: "All of the following are third-party-APIs EXCEPT:",
      choices: ["Java", "jQuery", "Bootstrap", "Google Fonts"],
      answer: "Java",
    }
];
var score = 0;  // a variable to accumulate correct answers 
var questionsIndex = 0;  // keeping track of which question we're on

var correctChoice = "";
var choiceAEl = "";
var choiceBEl = "";
var choiceCEl = "";
var choiceDEl = "";
var storedScores = [];

//Display Pages
var landingDiv = document.getElementById("landing-page");
var questionDiv = document.getElementById("question-page");
var promptDiv = document.getElementById("prompt");
var resultsDiv = document.getElementById("results-page");
var buttonDiv = $('#button-div');
var startBtnEl = "";
// var scoresDiv = document.getElementById("high-scores-div");


//Timer Variables
var secondsLeft = 100; // start timer at 100 seconds
var timeEl = document.getElementById("time"); 


//var viewScoresBtn = document.getElementById("view-scores");  //button for high scores


function init() {
  startBtnEl = document.createElement("button");
  startBtnEl.innerText = "Start Quiz";
  buttonDiv.append(startBtnEl);
};


function setTime() {
  displayQuestions();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerText = secondsLeft + " seconds left";
        if(secondsLeft == 0) {
            clearInterval(timerInterval);
            displayScore();
      };
    }, 1000);
  };

function displayQuestions() {
  startBtnEl.remove();
  promptDiv.innerHTML = "";
  buttonDiv.empty();

  var choiceAEl = document.createElement("button");
  var choiceBEl = document.createElement("button");
  var choiceCEl = document.createElement("button");
  var choiceDEl = document.createElement("button");

  choiceAEl.setAttribute('class', 'choice-btn');
  choiceBEl.setAttribute('class', 'choice-btn');
  choiceCEl.setAttribute('class', 'choice-btn');
  choiceDEl.setAttribute('class', 'choice-btn');

  choiceAEl.addEventListener('click', checkAnswer);
  choiceBEl.addEventListener('click', checkAnswer);
  choiceCEl.addEventListener('click', checkAnswer);
  choiceDEl.addEventListener('click', checkAnswer);

  buttonDiv.append(choiceAEl);
  buttonDiv.append(choiceBEl);
  buttonDiv.append(choiceCEl);
  buttonDiv.append(choiceDEl);

  switch (questionsIndex) {
      case 0:
      promptDiv.textContent = questions[0].prompt;
      choiceAEl.textContent = questions[0].choices[0];
      choiceBEl.textContent = questions[0].choices[1];
      choiceCEl.textContent = questions[0].choices[2];
      choiceDEl.textContent = questions[0].choices[3];
      
      correctChoice = questions[0].answer;
      break;

      case 1:
        promptDiv.textContent = questions[1].prompt;
        choiceAEl.textContent = questions[1].choices[0];
        choiceBEl.textContent = questions[1].choices[1];
        choiceCEl.textContent = questions[1].choices[2];
        choiceDEl.textContent = questions[1].choices[3];

        correctChoice = questions[1].answer;
      break;

      case 2:
        promptDiv.textContent = questions[2].prompt;
        choiceAEl.textContent = questions[2].choices[0];
        choiceBEl.textContent = questions[2].choices[1];
        choiceCEl.textContent = questions[2].choices[2];
        choiceDEl.textContent = questions[2].choices[3];

        correctChoice = questions[2].answer;
      break;

      case 3:
        promptDiv.textContent = questions[3].prompt;
        choiceAEl.textContent = questions[3].choices[0];
        choiceBEl.textContent = questions[3].choices[1];
        choiceCEl.textContent = questions[3].choices[2];
        choiceDEl.textContent = questions[3].choices[3];

        correctChoice = questions[3].answer;
      break;

      case 4:
        promptDiv.textContent = questions[4].prompt;
        choiceAEl.textContent = questions[4].choices[0];
        choiceBEl.textContent = questions[4].choices[1];
        choiceCEl.textContent = questions[4].choices[2];
        choiceDEl.textContent = questions[4].choices[3];
    
        correctChoice = questions[4].answer;
      break;

      case 5:
        displayScore();
      break;
  }

};

function checkAnswer() {
    if (this.innerHTML == correctChoice) {
       score += 10;
      console.log("Correct");
      } else {
        secondsLeft -= 10;
        console.log("Incorrect");
    };
    questionsIndex ++;
    displayQuestions();
}

function displayScore() {
    timeEl.remove();
    buttonDiv.empty();

    var userInitials = document.createElement('input');
    userInitials.setAttribute("type", "text");

    var submitBtn = document.createElement('button');
    submitBtn.innerText = "Submit";

    resultsDiv.innerHTML = "Your score = " + score + ".    Initials: "
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();      
      var initials = userInitials.value;
      var userAndScore = {
        initials: initials,
        score: score,
        };

      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      console.log(highScores);

      highScores.push(userAndScore);

      console.log("after being pushed: ", highScores)

      var newScore = JSON.stringify(highScores);
      localStorage.setItem("highScores", newScore);
  
      window.location.replace("highscores.html");

    });

    resultsDiv.append(userInitials);
    resultsDiv.append(submitBtn);

    
};


init();
startBtnEl.addEventListener("click", setTime);
