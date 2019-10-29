let cnv;



function setup() {
  cnv = createCanvas(100, 100);
  centerCanvas();
  background(255, 0, 200);
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}