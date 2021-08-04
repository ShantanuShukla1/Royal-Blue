var grid = [];
var score = 1;
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
    chosenTiles.length++;
    chosenTiles.push(1 + Math.floor(Math.random()*16));
    if(user.value == choseTiles(i)) {
        text = "You Lose";
    } 
    else {
        score++;
    }
}