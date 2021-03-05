var scoresDiv = document.getElementById("high-scores-div");
var clearBtn = document.getElementById("clearBtn");

//if (JSON.parse(localStorage.getItem("highScores")) !== null) {
//    highScores = JSON.parse(localStorage.getItem("highScores"))
//   };

function init() {

    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores)

    if (highScores !== null) {
        for (var i=0; i < highScores.length; i++) {
            var userDisplay = document.createElement("p");

            userDisplay.textContent = "Player: " + highScores[i].initials + "Score: " + highScores[i].score;

            scoresDiv.append(userDisplay);
        }
    }

}

init();
  
  
