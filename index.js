const canvas = document.getElementById('game');
const context = canvas.getContext('2d')

let speed =7;

let tileCount=20;
let tileSize = canvas.width/ tileCount -2;
let headX =10;
let headY=10;

let VelX = 0;
let VelY = 0;



function drawGame(){
    clearScreen();
    changeSnakeposition();
    drawSnake();
    setTimeout(drawGame, 1000/speed);

}

function clearScreen(){
    context.fillStyle='#4699f2';
    context.fillRect(0,0,canvas.clientWidth,canvas.height);
}



function drawSnake(){
    context.fillStyle = '#f76300';
    context.fillRect(headX*tileCount,headY*tileCount, tileSize,tileSize);
    
}


function changeSnakeposition(){
    headX = headX + VelX;
    headY = headY + VelY;
}


document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    if(event.keyCode == 38){//up
        VelY = -1;
        VelX = 0;

    }
    if(event.keyCode == 40){//down
        VelY = 1;
        VelX = 0;

    }
    if(event.keyCode == 37){//left
        VelY = 0;
        VelX = -1;

    }
    if(event.keyCode == 39){//right
        VelY = 0;
        VelX = 1;

    }





}

drawGame();
