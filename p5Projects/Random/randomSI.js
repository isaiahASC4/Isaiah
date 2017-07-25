<canvas id="gameCanvas"></canvas>
<script>
//	Setup the canvas.
var canvas = document.getElementById("gameCanvas");
canvas.width = 800;
canvas.height = 600;

//	Create the game.
var game = new Game();

//	Initialise it with the game canvas.
game.initialise(canvas);

//	Start the game.
game.start();

//	Listen for keyboard events.
var pressedKeys = [];
window.addEventListener("keydown", function keydown(e) {
	var keycode = window.event.keycode || e.which;
    if(!pressedKeys[keycode])
    	pressedKeys[keycode] = true;
    //	Supress further processing of left/right/space (37/29/32)
    if(keycode == 37 || keycode == 39 || keycode == 32) {
    	e.preventDefault();
    }
    game.keyDown(keycode);
});
window.addEventListener("keyup", function keydown(e) {
	var keycode = window.event.keycode || e.which;
    if(pressedKeys[keycode])
    	delete pressedKeys[keycode];
    game.keyUp(keycode);
});
</script>