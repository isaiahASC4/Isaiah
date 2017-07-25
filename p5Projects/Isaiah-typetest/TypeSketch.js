function setup() {

    createCanvas(400, 400)
    background(50);

    fill ("white");
    textSize(76)
    text("please type in the sentence below.", 50, 50)
    text(sentence, 50, 100)

    function keyTyped() {
        console.log(typed)
        typed = typed + key
        if (typed == sentence)
        text("You Win!")
        
        
    }











/*var w = "Hello World"
var typed = ""    
    function keyPressed(){
  // Do something
  console.log(w)
    }

  function keyTyped()    {
    console.log(key)
  return false; // prevent any default behaviour
}
    
}