var scoresDiv = document.getElementById("high-scores-div");
var clearBtn = document.getElementById("clearBtn");

//if (JSON.parse(localStorage.getItem("highScores")) !== null) {
//    highScores = JSON.parse(localStorage.getItem("highScores"))
//   };

function init() {

    clear.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores)

    // if (highScores !== null) {
    //     for (var i=0; i < highScores.length; i++) {
    //         var userDisplay = document.createElement("p");

    //         userDisplay.textContent = "Player: " + highScores.initials + "Score: " + highScores.score;

    //         scoresDiv.append(userDisplay);
    //     }
    // }

}

  
  
  
