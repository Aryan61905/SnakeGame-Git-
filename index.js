const canvas = document.getElementById('game');
const context = canvas.getContext('2d')

let speed =7;
function drawGame(){
    clearScreen();
    setTimeout(drawGame, 1000/speed);

}

function clearScreen(){
    context.fillStyle='#4699f2';
    context.fillRect(0,0,canvas.clientWidth,canvas.height);
}

    drawGame();
