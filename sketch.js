var snake = null;
const scl = 20;
var food;

function setup() {
  // put setup code here
    createCanvas(600,600);
    snake = new Snake();
    frameRate(10);
    pickLocation();
}
function draw() {
    // put drawing code here
    background(51);
    if (snake.eat(food)) {
        pickLocation();
    }
    snake.death();
    updateLockedSide();
    snake.update();
    snake.show();
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
}


/*
* Funcion que nos permite elegir
* una posicion random para la comida
* */
function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

/*
* Actualizamos movimiento de la serpiente
* */
// Esto nos indicara que lado esta bloqueado (180º)
let up = false;
let down = false;
let right = false;
let left = false;
function keyPressed() {

    if (keyCode === UP_ARROW && !up) {
        snake.dir(0,-1);
    } else if (keyCode === DOWN_ARROW && !down) {
        snake.dir(0,1);
    } else if (keyCode === RIGHT_ARROW && !right) {
        snake.dir(1,0);
    } else if (keyCode === LEFT_ARROW && !left) {
        snake.dir(-1,0);
    }
}

function updateLockedSide() {
    if (snake.xspeed === 0 && snake.yspeed === -1) {
        // estamos llendo hacia arriba
        down = true;
        up = false;
        right = false;
        left = false;
    } else if (snake.xspeed === 0 && snake.yspeed === 1) {
        // Hacia abajo
        down = false;
        up = true;
        right = false;
        left = false;
    } else if (snake.xspeed === 1 && snake.yspeed === 0) {
        // Hacia derecha
        down = false;
        up = false;
        right = false;
        left = true;
    } else if (snake.xspeed === -1 && snake.yspeed === 0) {
        // Hacia izquierda
        down = false;
        up = false;
        right = true;
        left = false;
    }
}













