function setup() {
    createCanvas(500, 500);
    background("purple");
    fill(209, 0, 0)
    rect(50, 100, 100, 100);
    fill(100)
    rect(350, 100, 100, 100);
    fill("white");
    rect(50, 225, 100, 25);
    rect(50, 260, 100, 25);
    rect(50, 300, 100, 25);
    rect(350, 225, 100, 25);
    rect(350, 260, 100, 25);
    rect(350, 300, 100, 25);
    fill("blue");
    text("Flamethrower", 60, 240);
    text("Ember", 75, 275);
    text("Fire Punch", 70, 315);
    text("Barrage", 380, 240);
    text("Constrict", 375, 275);
    text("Dizzy Punch", 365, 315);
}

var pokemon1 = {
    atk1:20,
    atk2:25,
    atk3:30,
    HP:80
}
var pokemon2 = {
    atk1:10,
    atk2:15,
    atk3:20,
    HP:100
}

    function draw() {
    fill(209, 0, 0)
    rect(50, 100, 100, 100);
    fill(100)
    rect(350, 100, 100, 100);
    fill("white");
    rect(50, 225, 100, 25);
    rect(50, 260, 100, 25);
    rect(50, 300, 100, 25);
    rect(350, 225, 100, 25);
    rect(350, 260, 100, 25);
    rect(350, 300, 100, 25);
     fill("blue");
    textSize(13)
    text("Flamethrower", 60, 240);
    text("Ember", 75, 275);
    text("Fire Punch", 70, 315);
    text("Barrage", 380, 240);
    text("Constrict", 375, 275);
    text("Dizzy Punch", 365, 315);
    fill(0, 180, 0)
    rect(50, 70, pokemon1.HP, 10);
    fill(0, 180, 0);
    rect(350, 70, pokemon2.HP, 10);
    if (pokemon1.HP < 0) {
        program.restart()
        textSize("35")      
            text("Player 1 loses", 250, 400);        
    }
    else if (pokemon2.HP < 0) {
        program.restart()
        textSize("35")
            text("Player 1 wins!", 250, 400)
    }    
   
}

function mouseClicked(){
    if(mouseX > 350 && mouseX < 450 && mouseY > 225 && mouseY < 250){
        background('purple')
        pokemon1.HP = pokemon1.HP - pokemon2.atk1
    }
        if(mouseX > 350 && mouseX < 450 && mouseY > 260 && mouseY < 285){
        background('purple')
        pokemon1.HP = pokemon1.HP - pokemon2.atk2
    }
        if(mouseX > 350 && mouseX < 450 && mouseY > 295 && mouseY < 320){
        background('purple')
        pokemon1.HP = pokemon1.HP - pokemon2.atk3
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 225 && mouseY < 250){
        background('purple')
        pokemon2.HP = pokemon2.HP - pokemon1.atk1
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 260 && mouseY < 285){
        background('purple')
        pokemon2.HP = pokemon2.HP - pokemon1.atk2
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 295 && mouseY < 320){
        background('purple')
        pokemon2.HP = pokemon2.HP - pokemon1.atk3
    }
    return text("GAME OVER")
}