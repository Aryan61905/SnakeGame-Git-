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

let score=0;



function drawGame(){
    changeSnakeposition();

    let result = isGameOver();
    if(result){
        return;
    }
    
    
    
    clearScreen();
    
    checkApplecollision();
    drawApple();
    drawSnake();
    drawScore();
    if (score>2){
        speed =11;
    }
    if  (score >5){
        speed =17;
    }
    setTimeout(drawGame, 1000/speed);

}



function isGameOver(){
    let gameover =false;
    if(VelX===0 && VelY===0){
        return false;
    }

    if (headX<0 || headY<0 || headY>=tileCount || headX>=tileCount){
        gameover =true;
    }
    for (let i=0;i<snakeParts.length;i++){
        let part =snakeParts[i];
        if(part.x === headX && part.y ===headY){
            gameover =true;
            break;
        }
    }
    if (gameover){
        context.fillStyle = "red";
        context.font = "50px Verdana";
        context.fillText("GAME OVER!!",canvas.width/10,canvas.height/2);
    }
    return gameover;



}


function drawScore(){
    context.fillStyle="white";
    context.font = "10px Verdana"
    context.fillText("SCORE => "+score, canvas.width-80,13);
}

function clearScreen(){
    context.fillStyle='#4699f2';
    context.fillRect(0,0,canvas.width,canvas.height);
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
        score++
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
