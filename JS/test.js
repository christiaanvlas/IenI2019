function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
      for (var n = 0;n < 5;n++){
      ellipse(50,200,100);
      translate(87.5,0);
    }
  
}
