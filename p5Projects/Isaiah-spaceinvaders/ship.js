function Ship() {
    rectx = 290
    this.x = width/2;


    this.show = function() {
        fill(255);
        rect(this.x, height-20, 20, 20)
    }

    this.move = function(dir) {
        this.x += dir*5;
    }
}