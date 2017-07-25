        function setup() {
            createCanvas(500,500);
            
        }
        var x = 0;
        var y = 0;
        var xMove = 1;
        var yMove = 1;
        function draw() {
            background(200);
        
            function mouseClicked() {
                if (x < 500 ){
            

            ellipse(x, 150, 100);

            }
            if (x > 500 ){
            x = x * -1
            ellipse(x, 150, 100);


            }
            x = x + xMove;    
                
            }
