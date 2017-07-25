 function setup(){
    createCanvas(600, 400)
  
    

}
rectx = 290
bally = 360
var xMove = 1
var x = 1;
var shoot = 2
function draw(){
    background('blue')
    fill('red')
    rect(400 + x, 50, 25, 25);
    rect(450 + x, 50, 25, 25);
    rect(500 + x, 50, 25, 25);
    rect(550 + x, 50, 25, 25);
    rect(400 + x, 100, 25, 25);
    rect(450 + x, 100, 25, 25);
    rect(500 + x, 100, 25, 25);
    rect(550 + x, 100, 25, 25);
    fill('green')
    rect(rectx, 350, 20, 40)
    fill('red')
    ball = ellipse(rectx + 11, bally, 10)
    
   if (shoot == 1){
        bally -=10
    }
    if (bally <= 0){
        bally = 380
        shoot = 2
    }
    if (keyIsDown(LEFT_ARROW)){
       rectx -= 5
    }
    if (keyIsDown(RIGHT_ARROW)){
       rectx += 5
    }
    if (rectx <= 0 || rectx > 560){
        if (keyIsDown(LEFT_ARROW)){
       rectx += 5
    }
    if (keyIsDown(RIGHT_ARROW)){
       rectx -= 5
    }
        
    }

   
}
function mousePressed(){
       shoot = 1
}