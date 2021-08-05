var grid = [];
var roundNumber = 1;
var score = 0;
var highscore = 0;
for (let item of document.getElementsByClassName("isometric-card")){
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
            alert("Game over, your score is: " + score);
            if (score >= highscore) {
                highscore = score;
                console.log(highscore);
                document.getElementById("high-score").textContent = highscore;  
            };
            score = -1;
            roundNumber = 1;
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
    roundNumber++;
    for(let gridItem of grid) {
        gridItem.style.setProperty("background-color", "white");
        gridItem.addEventListener("click", selectItem, false);
    }
    if (score == 120) {
        alert("Congratulations, you beat the game!");
        score = 0;
        roundNumber = 1
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


// for (i=0; i<16; i++) {
//     chosenTiles.length++;
//     chosenTiles.push(1 + Math.floor(Math.random()*16));
//     if(user.value == choseTiles(i)) {
//         text = "You Lose";
//     } else {
//         roundNumber++;
//     }
// }

// here is the code for perspective change on hover. TESTING:
// var container = document.getElementByClass("isometric-card-holder");
// var inner = document.getElementByClass("isometric-card");
        
// var onMouseEnterHandler = function(event) {
//   update(event);
// };
// var onMouseLeaveHandler = function() {
//   inner.style = "";
// };
// var onMouseMoveHandler = function(event) {
//   if (isTimeToUpdate()) {
//     update(event);
//   }
// };

// container.onmouseenter = onMouseEnterHandler;
// container.onmouseleave = onMouseLeaveHandler;
// container.onmousemove = onMouseMoveHandler;

// var counter = 0;
// var updateRate = 10;
// var isTimeToUpdate = function() {
//   return counter++ % updateRate === 0;
// };

// var container = document.getElementByClass("isometric-card-holder");
// var inner = document.getElementByClass("isometric-card");
// var mouse = {
//   _x: 0,
//   _y: 0,
//   x: 0,
//   y: 0,
//   updatePosition: function(event) {
//     var e = event || window.event;
//     this.x = e.clientX - this._x;
//     this.y = (e.clientY - this._y) * -1;
//   },
//   setOrigin: function(e) {
//     this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
//     this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
//   },
//   show: function() { return '(' + this.x + ', ' + this.y + ')'; }
// }
// mouse.setOrigin(container);

// var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / inner.offsetHeight/2).toFixed(2),
//       (mouse.x / inner.offsetWidth/2).toFixed(2)
//     );
//   };
  
//   var updateTransformStyle = function(x, y) {
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   }

function resizeResizeableHeight() {
    $('.resizableHeight').each( function() {
        $(this).outerHeight( $(this).parent().height() - ( $(this).offset().top - ( $(this).parent().offset().top + parseInt( $(this).parent().css('padding-top') ) ) ) )
    });
}