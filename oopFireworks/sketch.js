let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(0);
  for (i = theFireworks.length - 1; i >= 0; i--) {
    theFireworks[i].move();
    if (theFireworks[i].isDone()) {
      theFireworks.splice(i, 1);
    } else {
      theFireworks[i].display();
    }
  }
  // if (mouseIsPressed) {
  //   let myFirework = new Particle(mouseX, mouseY, random(-3, 3), random(-3, 3), 10);
  //   theFireworks.push(myFirework);
  // }
}

function mousePressed() {
  for (i = 0; i < 50; i++) {
    let myFirework = new Particle(
      mouseX,
      mouseY,
      random(-2, 1),
      random(-3, 1),
      1
    );
    theFireworks.push(myFirework);
  }
}

class Particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
    this.gravity = 0.04;
  }

  display() {
    fill(255, 100, 0, this.alpha);
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.dy += this.gravity;
    if (this.dx < 0) {
      this.dx += 0.01;
    } else if (this.dx > 0) {
      this.dx -= 0.01;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 1;
  }

  isDone() {
    return this.alpha <= 0;
  }
}
