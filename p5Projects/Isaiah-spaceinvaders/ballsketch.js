function Ball(x, y)
this.x = x
this.y = y

this.show = function() {
    fill(0, 200, 100, 50);
    ellipse(this.x, this.y, 20);
}