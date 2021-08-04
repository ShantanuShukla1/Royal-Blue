var grid = [];
var roundNumber = 1;
for (let item of document.getElementsByClassName("grid-item")){
    item.addEventListener("click", selectItem, false);
    grid.push(item);
}
function selectItem() {
    var user = this.textContent;
    console.log(user);
    this.style.background = 'blue';
}
var choseTiles = new Array();
for (i=0;i<16; i++) {
    this.style.setProperty("background-color", "blue");
    let pick = computerPick(this);
    var results = "You Won"
    if (pick.value == this.value) {
        result = "You Lost"
    }
    document.getElementById("result").textcontent = result
}

function computerPick(userPick) {
    let userPickIsSameAsPick = true;
    while (userPickIsSameAsPick) {
        let pick = grid[Math.floor(Math.random() * grid.length)];
        userPickIsSameAsPick = userPick == pick;
    }
    pick.style.setProperty("background-color", "red");
    return pick;
}

for (i=0; i<16; i++) {
    chosenTiles.length++;
    chosenTiles.push(1 + Math.floor(Math.random()*16));
    if(user.value == choseTiles(i)) {
        text = "You Lose";
    } else {
        roundNumber++;
    }
}