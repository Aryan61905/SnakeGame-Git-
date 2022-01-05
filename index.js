const canvas = document.getElementById('game');
const context = canvas.getContext('2d')

let speed =7;

let tileCount=20;
let tileSize = canvas.width/ tileCount -2;
let headX =10;
let headY=10;


function drawGame(){
    clearScreen();
    setTimeout(drawGame, 1000/speed);

}

function clearScreen(){
    context.fillStyle='#4699f2';
    context.fillRect(0,0,canvas.clientWidth,canvas.height);
}

    drawGame();
