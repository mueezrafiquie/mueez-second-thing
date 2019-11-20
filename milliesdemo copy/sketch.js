let timeBetweenWaves;
let lastTimeWaveWasSent;
let isGrey = true;

function setup() {
  createCanvas(600, 600);
  timeBetweenWaves = 500;
  lastTimeWaveWasSent = 0;
}

function draw() {
  sendingAlienWaves();
}

function sendingAlienWaves() {
  for (i = 0; i <= 5; i++) {
    if (millis() >= lastTimeWaveWasSent + timeBetweenWaves) {
      isGrey = !isGrey;
      lastTimeWaveWasSent = millis();
      if (isGrey) {
        background(220);
      } else {
        background(0);
      }
    }
  }
}
