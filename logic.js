var grid = [];
var roundNumber = 1;
var score = 0;
for (let item of document.getElementsByClassName("grid-item")){
    item.addEventListener("click", selectItem, false);
    grid.push(item);
}
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
        }
    }
    score = score + roundNumber;
    document.getElementById("result").textContent = score;
}   

function advanceToNextRound() {
    roundNumber++;
    for(let gridItem of grid) {
        gridItem.style.setProperty("background-color", "white");
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
    return picks;
}

// for (i=0; i<16; i++) {
//     chosenTiles.length++;
//     chosenTiles.push(1 + Math.floor(Math.random()*16));
//     if(user.value == choseTiles(i)) {
//         text = "You Lose";
//     } else {
//         roundNumber++;
//     }
// }