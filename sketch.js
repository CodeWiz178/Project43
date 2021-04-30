Angle = 0;

function setup() {
  createCanvas(800,800);
  createSprite(400, 400, 20, 20);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);




}

function draw() {
  background(0,0,0); 
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke('yellow');
  strokeWeight(7);
  line(400,400,400,200);
  pop();
 
  push();
  rotate(mnAngle);
  stroke('red');
  strokeWeight(7);
  line(400,400,400,250);
  pop();

  push();
  rotate(hrAngle);
  stroke('blue');
  strokeWeight(7);
  line(400,400,400,300);
  pop();

  drawSprites();
  
}