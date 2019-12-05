function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('steelblue');
  ellipse(225,225,300);
  fill('deepskyblue');
  ellipse(225,225,300);
    fill('blue');
  rect(125,125,200,200);
}