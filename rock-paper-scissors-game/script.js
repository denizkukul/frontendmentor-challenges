var choises = ["rock", "paper", "scissors"];
var counter = 0;

{   //Show and hide Rules screen
    var body = document.querySelector("body");
    var rulesbtn = document.querySelector("#rulesbtn");
    var main = document.querySelector("#main");
    var closebtn = document.querySelector("#close");
    var rulesscreen = document.querySelector("#rulesscreen");

    rulesbtn.addEventListener("click", showRules);
    closebtn.addEventListener("click", hideRules);

    function showRules() {
        rulesscreen.style.display = "flex";
    }

    function hideRules() {
        rulesscreen.style.display = "none";
    }
}

{   //Results
    var rps = document.querySelectorAll(".button");
    var selectionScreen = document.querySelector("#selectionscreen");
    var resultScreen = document.querySelector("#resultscreen");
    var resultPanel = document.querySelector("#resultpanel");
    var result = document.querySelector("#result");
    var picked = document.querySelectorAll(".picked");
    var score = document.querySelector("#scoreval");
    var playAgainbtn = document.querySelector("#playagain");
    var space1 = document.querySelector("#main .space1");
    var space2 = document.querySelector("#main .space2");
    var picks = document.querySelector("#picks");

    rps.forEach(x => x.addEventListener("click", pick));
    playAgainbtn.addEventListener("click", playAgain);

    function pick(e) {
        let x = e.currentTarget;
        let playerPicked = x.classList[2];
        let opponentPicked = choises[Math.floor(Math.random() * 3)]

        for (let i = 0; i < 3; i++) {
            picked[0].classList.remove(choises[i]);
            picked[1].classList.remove(choises[i]);
        }

        picked[0].classList.add(playerPicked);

        space1.classList.add("result");
        space2.classList.add("result");

        selectionScreen.classList.remove("active");
        resultScreen.classList.add("active");

        showResult(playerPicked, opponentPicked);

        setTimeout(function () {
            picked[1].classList.remove("unknown");
            picked[1].classList.add(opponentPicked);

            setTimeout(function () {
                picks.classList.add("active");
                resultPanel.classList.add("active");
                score.innerHTML = counter;
                if (res === "lose") {
                    picked[1].classList.add("winner");
                }
                else if (res === "win") {
                    picked[0].classList.add("winner");
                }
            }, 800)
        }, 1000)

    }

    function showResult(x, y) {
        if (x === y) {
            res = "tie";
            result.innerHTML = "TIE";
        }
        else if ((x === "rock" && y === "paper") || (x === "paper" && y === "scissors") || (x === "scissors" && y === "rock")) {
            res = "lose"
            result.innerHTML = "YOU LOSE";
        }
        else {
            res = "win"
            result.innerHTML = "YOU WIN";
            counter++;
        }
    }

    function playAgain() {
        selectionScreen.classList.add("active");
        resultScreen.classList.remove("active");
        resultPanel.classList.remove("active");

        for (let i = 0; i < 3; i++) {
            picked[1].classList.remove(choises[i]);
        }
        picked[1].classList.add("unknown");

        picked[0].classList.remove("winner");
        picked[1].classList.remove("winner");

        space1.classList.remove("result");
        space2.classList.remove("result");
        picks.classList.remove("active");

    }
}

