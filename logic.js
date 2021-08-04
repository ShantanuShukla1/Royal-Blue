var grid = [];
var roundNumber = 1;
for (let item of document.getElementsByClassName("grid-item")){
    item.addEventListener("click", selectItem, false);
    grid.push(item);
}
function selectItem() {
    var user = this.textContent;
    console.log(user);
    this.style.setProperty("background-color", "blue");
    let pick = computerPick(this);
    var result = "You Won";
    if(pick.getAttribute("value") == this.getAttribute("value")) {
        result = "You Lost";
    }
    document.getElementById("result").textContent = result
}   

function computerPick(userPick) {
    let pick = null;
    let userPickIsSameAsPick = true;
    while (userPickIsSameAsPick) {
        pick = grid[Math.floor(Math.random() * grid.length)];
        userPickIsSameAsPick = userPick == pick;
    }
    pick.style.setProperty("background-color", "red");
    return pick;
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