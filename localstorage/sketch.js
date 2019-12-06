//Local Storage Demo

let numberOfClicks = 0;
let highScore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (getItem("highestScore" !== null)) {
    highScore = getItem("highestScore");
  }
  else {
    highScore = 0;
  }
}

function draw() {
  background(220);
  textSize(150);
  fill("black");
  text(numberOfClicks, 100, 200);

  fill("green");
  text(highScore, 100, 400);
}

function mousePressed() {
  numberOfClicks++;

  if (numberOfClicks > highScore) {
    highScore = numberOfClicks;
    storeItem("highestScore", highScore);
  }
}
