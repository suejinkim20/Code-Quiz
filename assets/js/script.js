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
//var correctChoice = "";
var choiceAEl = "";
var choiceBEl = "";
var choiceCEl = "";
var choiceDEl = "";


//Display Pages
var landingDiv = document.getElementById("landing-page");
var questionDiv = document.getElementById("question-page");
var promptDiv = document.getElementById("prompt");
var resultsDiv = document.getElementById("results-page");
var buttonDiv = $('#button-div');
var feedbackDiv = document.getElementById("feedback");
var startBtnEl = "";
var scoresDiv = document.getElementById("high-scores-div");

//Timer Variables
var secondsLeft = 100; // start timer at 100 seconds
var timeEl = document.getElementById("time"); 

var scoresDiv = document.getElementById("scores-div"); //div for high scores
var viewScoresBtn = document.getElementById("view-scores");  //button for high scores
//var startBtnEl = document.getElementById("startBtn");  //start button div

var emptyArray = [];  // an array to store high scores
var storedArray = JSON.parse(window.localStorage.getItem("highScores"));  // the array of high scores from local storage

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
      } else {
        secondsLeft -= 10;
    };
    questionsIndex ++;
    displayQuestions();
}

if (questionsIndex == questions.length) {
  displayScore();
}

function displayScore() {
    timeEl.remove();
    //choices.textContent = "";
  buttonDiv.empty();

    var userInitials = document.createElement('input');
    var submitBtn = document.createElement('button');

    resultsDiv.innerHTML = "Your score = " + score + ".    Initials: "
    userInitials.setAttribute("type", "text");
    submitBtn.innerText = "Submit";
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      var scoresArray = defineScoresArray(storedArray, emptyArray);

      var initials = userInitials.value;
      var userAndScore = {
        initials: initials,
        score: score,
      };
  
      scoresArray.push(userAndScore);

      window.localStorage.setItem("highScores", JSON.stringify(scoresArray));

      displayAllScores();

      submitBtn.remove();
  
    }
    );

    resultsDiv.append(userInitials);
    resultsDiv.append(submitBtn);

};
function defineScoresArray(arr1, arr2) {
  if(arr1 !== null) {
    return arr1
  } else {
    return arr2
  }
};

function displayAllScores() {
  timeEl.remove();
  //startBtnEl.remove();
  resultsDiv.remove();
let scoresArray = defineScoresArray(storedArray, emptyArray);

scoresArray.forEach(obj => {
  let initials = obj.initials;
  let storedScore = obj.score;
  let resultsP = document.createElement("p");
  resultsP.innerText = `${initials}: ${storedScore}`;
  scoresDiv.append(resultsP);
});
}


init();
startBtnEl.addEventListener("click", setTime);
//displayScore();

//Function to display the questions
  // with a parameter of the question to be asked.
  // loop through the answers and apend buttons for each on the page
  //dynamically updated/overwrite the div with questions and answers

//on click function that checks if the answer is correct
  // conditional statement.  
  // If the answer is incorrect decrement 15 seconds from the countdown then move to the next question

// If the answer is correct just move to the next question

//A set interval function
  // decrements time at a set interval
  // udates the display

//HTML docment that includes a div or secion where the questions will be displayed

//capture the users initials at the end with their score for display at the end of the quiz and store in localStorage.
  //use a global variable to accumulate correct answers then save then use on click to save to localStorage