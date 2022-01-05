const canvas = document.getElementById('game');
const context = canvas.getContext('2d')

let speed =7;

let tileCount=20;
let tileSize = canvas.width/ tileCount -2;
let headX =10;
let headY=10;


function drawGame(){
    clearScreen();
    drawSnake();
    setTimeout(drawGame, 1000/speed);

}

function clearScreen(){
    context.fillStyle='#4699f2';
    context.fillRect(0,0,canvas.clientWidth,canvas.height);
}

function drawSnake(){
    context.fillStyle = '#f76300'
    context.fillRect(headX*tileCount,headY*tileCount, tileSize,tileSize)
    
}

drawGame();
