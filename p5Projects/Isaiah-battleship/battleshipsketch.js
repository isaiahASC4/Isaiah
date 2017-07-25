/*function setup() {
    createCanvas(505, 505);
    background(225);
    rect(0, 0, 100, 100)
    rect(0, 100, 100, 100)
    rect(0, 200, 100, 100)
    rect(0, 300, 100, 100)
    rect(0, 400, 100, 100)
    rect(100, 0, 100, 100)
    rect(200, 0, 100, 100)
    rect(300, 0, 100, 100)
    rect(400, 0, 100, 100)
    rect(100, 100, 100, 100)
    rect(200, 100, 100, 100)
    rect(300, 100, 100, 100)    
    rect(400, 100, 100, 100)
    rect(100, 200, 100, 100)
    rect(100, 300, 100, 100)
    rect(100, 400, 100, 100)
    rect(200, 200, 100, 100)
    rect(200, 300, 100, 100)
    rect(200, 400, 100, 100)
    rect(300, 200, 100, 100)
    rect(300, 300, 100, 100)
    rect(300, 400, 100, 100)
    rect(400, 200, 100, 100)
    rect(400, 300, 100, 100)
    rect(400, 400, 100, 100)
    
    
}
var x = 0;

function draw() {
    
}*/



var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function mouseClicked() {
  if (mouseX <= 100 && mouseY <= 100) {
    value = 255;
  } else if (mouseX <= 200 && mouseX >= 101 && mouseY <= 200 && mouseY >= 101) {
    value = 255;
  }
}