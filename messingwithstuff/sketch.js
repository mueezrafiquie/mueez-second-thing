let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255);
  fill(180)
  rect(200,200,100,150);
  fill(0)
  ellipse(mouseX,mouseY,100,100);

	hit = collideRectCircle(200,200,100,150,mouseX,mouseY,100);

	print("colliding? " + hit);
}