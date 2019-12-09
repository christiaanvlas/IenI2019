var X=450
var Y=450

function setup() {
  canvas = createCanvas(450,450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
  angleMode(DEGREES);
  rectMode (CENTER);
}

function draw() {
  noStroke();
  translate(X/2,Y/2);
  rect(0,0,200,200);
  
  rotate(45);
  
  rect(0,0,200,200);
  rect(X/2,Y/2,50,50)
}
