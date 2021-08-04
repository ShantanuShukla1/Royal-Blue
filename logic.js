var grid = [];
for (let item of document.getElementsByClassName("grid-item")){
    item.addEventListener("click", selectItem, false);
    grid.push(item)
}
function selectItem() {
    var user = this.textContent
    console.log(user)
}

var choseTiles = new Array();
var score = 1;
for (i=0, i<16, i++) {
    chosenTiles.length++;
    chosenTiles.push(1 + Math.floor(Math.random()*16));
    if(user.value == choseTiles(i)) {
        text = "You Lose";
    } else {
        score++;
    }
}
