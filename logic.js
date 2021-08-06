// Variables used throughout the code
var grid = [];
var roundNumber = 0;
var score = 0;
var highscore = 0;
// Adds constant used in listener for the Start --> Next Round Button text change
const btn = document.getElementById("advance");
// Listens for "Start/Next Round" button click event
document.getElementById("advance").addEventListener("click", advanceToNextRound, false);
// This function changes card color on clicking an item, and then tells the computer to pick another random card. If it matches, user loses. If it doesn't, user wins this round
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
    // changes the score number
    score = score + roundNumber;
    document.getElementById("result").textContent = score;
}   
// Adds function for Next Round Button. Button enables user to press cards on click between rounds and at start.
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
    // adds a message if you beat the game, though doing so is nearly impossible.
    if (score == 120) {
        alert("Congratulations, you beat the game!");
        score = 0;
        roundNumber = 0;
    }
}
//Function tells computer to pick another random card and style it.
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
//Changes button text from start to next round after first click.
btn.addEventListener("click", ()=>{

    if(btn.innerText === "Start"){
        btn.innerText = "Next Round";
    } else {
        btn.innerText= "Next Round";
    }
});