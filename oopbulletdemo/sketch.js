let theBullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (i = 0; i < theBullets.length; i++) {
    theBullets[i].display();
    theBullets[i].move();
  }
  if (mouseIsPressed) {
    let myBullet = new Bullet(mouseX, mouseY, random(-3, 3), random(-3, 3), 10);
    theBullets.push(myBullet);
  }
}

// function mousePressed() {
//   let myBullet = new Bullet(mouseX, mouseY, random(-3, 3), random(-3, 3), 10);
//   theBullets.push(myBullet);
// }

class Bullet {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  display() {
    fill(0);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
