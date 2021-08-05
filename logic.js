var grid = [];
var roundNumber = 0;
var score = 0;
var highscore = 0;
const btn = document.getElementById("advance");
document.getElementById("advance").addEventListener("click", advanceToNextRound, false);
function selectItem() {
    var user = this.textContent;
    console.log(user);
    this.style.setProperty("background-color", "blue");
    let pickArray = computerPicks(this);
    var userWon = true;
    for(let pick of pickArray) {
        if(pick.getAttribute("value") == this.getAttribute("value")) {
            userWon = false;
            alert("Game over, your score is: " + score);
            if (score >= highscore) {
                highscore = score;
                console.log(highscore);
                document.getElementById("high-score").textContent = highscore;  
            };
            score = 0;
            roundNumber = 0;
            btn.innerText= "Start";
            for(let gridItem of grid) {
                gridItem.style.setProperty("background-color", "white");
                gridItem.addEventListener("click", selectItem, false);
            }
        }
    }
    score = score + roundNumber;
    document.getElementById("result").textContent = score;
}   

function advanceToNextRound() {
    roundNumber++
    for(let gridItem of grid) {
        gridItem.style.setProperty("background-color", "white");
        gridItem.addEventListener("click", selectItem, false);
        
    }
    for (let item of document.getElementsByClassName("isometric-card")){
            item.addEventListener("click", selectItem, false);
            grid.push(item);
    }
    if (score == 120) {
        alert("Congratulations, you beat the game!");
        score = 0;
        roundNumber = 0;
    }
}
function computerPicks(userPick) {
    let picks = [];
    var possibleChoices = [...grid];
    possibleChoices.splice(grid.indexOf(userPick), 1);
    for(var i = 0; i < roundNumber; i++) {
       let pick = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
       picks.push(pick);
       possibleChoices.splice(possibleChoices.indexOf(pick), 1);
    } 
    for(let computerChosen of picks) {
        computerChosen.style.setProperty("background-color", "red");
    }
    for (let item of document.getElementsByClassName("isometric-card")){
        item.removeEventListener("click", selectItem, false);
    }
    return picks;
}

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Start"){
        btn.innerText = "Next Round";
    } else {
        btn.innerText= "Next Round";
    }
});