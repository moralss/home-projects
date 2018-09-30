function game() {
    list = [1,2,3,4,5];

        setInterval(runGame, 3000);
    
    console.log("second");
}

game()

// window.onload = createSnake;

const LEFT = "KeyA";
const RIGHT = "KeyD";
const UP = "KeyW";
const DOWN = "KeyS";


var snake = document.getElementById("snake");
const map = document.getElementById("map");


// function createSnake() {
//     var button = document.createElement('button');
//     button.setAttribute('id', 'button');
//     button.innerHTML = 'snake';
//     map.append(button);
// }

var newBlock = [];

function runGame() {
    console.log("ru")
    var count = 1;
    newBlock.push(count);

    console.log(newBlock);
    var boxes = document.getElementById("map").querySelectorAll("#box");
    count++;

    for (var i in boxes) {
        boxes[newBlock.length -1].innerHTML = "<button id='button'> <button>";
        boxes[newBlock.length -2].innerHTML = "";
        
        console.log();
    }

}


window.addEventListener("keypress", (event) => {
    event.preventDefault();


    if (event.code === UP) {
        console.log("up");
    }

    if (event.code === DOWN) {
        console.log("down");
    }

    if (event.code === RIGHT) {

        console.log("right");
    }

    if (event.code === LEFT) {
        console.log("left");
    }

    else {
        console.log(event.code);
    }
})