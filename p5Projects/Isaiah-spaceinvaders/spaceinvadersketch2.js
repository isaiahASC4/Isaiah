var ship;

function setup(){
    createCanvas(600, 400)
    ship = new Ship();
}

function draw(){
    background(51)
    ship.show();
}

function keyPressed() {
    if (keycode == RIGHT_ARROW) {
        ship.move(1);
    }
    if(keyCode === RIGHT_ARROW) {
        ship.left(-1);    
    }
}

