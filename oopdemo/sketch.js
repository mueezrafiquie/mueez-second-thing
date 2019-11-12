let george;
let kyle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  george = new Walker(width / 4, height / 4);
  kyle = new Walker(width * 0.75, height * 0.75);
}

function draw() {
  george.display();
  george.move();
  kyle.display();
  kyle.move();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fillColour = color(random(255), random(255), random(255));
    this.stepSize = 20;
    this.radius = 10;
  }

  display() {
    fill(this.fillColour);
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.stepSize;
    } else if (choice < 50) {
      this.y += this.stepSize;
    } else if (choice < 75) {
      this.x -= this.stepSize;
    } else {
      this.x += this.stepSize;
    }
  }
}
