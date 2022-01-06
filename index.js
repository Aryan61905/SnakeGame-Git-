const canvas = document.getElementById('game');
const context = canvas.getContext('2d')

class SnakePart{
    constructor(x,y){
        this.x =x;
        this.y =y;
    }
}

let speed =7;

let tileCount=20;
let tileSize = canvas.width/ tileCount -2;
let headX =10;
let headY=10;
const snakeParts=[];
let tailLength=2;


let appleX=5;
let appleY=5;

let VelX = 0;
let VelY = 0;




function drawGame(){
    
    clearScreen();
    changeSnakeposition();
    checkApplecollision();
    drawApple();
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
    context.fillStyle = "green";
    for(let i =0; i<snakeParts.length;i++){
        let part = snakeParts[i];
        context.fillRect(part.x*tileCount,part.y*tileCount,tileSize,tileSize)
    }
    snakeParts.push(new SnakePart(headX,headY));
    context.fillStyle = '#f76300';
    context.fillRect(headX*tileCount,headY*tileCount, tileSize,tileSize);





    if(snakeParts.length>tailLength){
        snakeParts.shift();
    }
    
}
function changeSnakeposition(){
    headX = headX + VelX;
    headY = headY + VelY;
}

function drawApple(){
    context.fillStyle = "red";
    context.fillRect(appleX*tileCount,appleY*tileCount,tileSize,tileSize);
    
}

function checkApplecollision(){
    if (appleX == headX && appleY == headY){
        appleX = Math.floor(Math.random()*tileCount);
        appleY = Math.floor(Math.random()*tileCount);
        tailLength++
    }
}


document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    if(event.keyCode == 38){//up
        if (VelY == 1){
            return
        }

        VelY = -1;
        VelX = 0;

    }
    if(event.keyCode == 40){//down
        if (VelY == -1){
            return}
        VelY = 1;
        VelX = 0;

    }
    if(event.keyCode == 37){//left
        if (VelX == 1){
            return}
        VelY = 0;
        VelX = -1;

    }
    if(event.keyCode == 39){//right
        if (VelX == -1){
            return}
        VelY = 0;
        VelX = 1;

    }





}

drawGame();
