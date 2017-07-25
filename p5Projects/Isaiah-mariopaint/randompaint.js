function setup() {

var value = 0;
function draw() {
  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r);
    line(i, 0, i, height);
  }
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}





}