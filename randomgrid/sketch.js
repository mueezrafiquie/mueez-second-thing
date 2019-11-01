let grid = [];
let rows = 30;
let cols = 30;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createArray(cols, rows);
}

function draw() {
  background(220);
  showGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function showGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function keyPressed() {
  if (key === "r") {
    grid = createArray(cols, rows);
  } else if (key === "c") {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        grid[y][x] = 1;
      }
    }
  }
}

function mousePressed() {
  let cellSize = width / cols;

  let xCord = floor(mouseX / cellSize);
  let yCord = floor(mouseY / cellSize);

  if (grid[yCord][xCord] === 1) {
    grid[yCord][xCord] = 0;
  } else {
    grid[yCord][xCord] = 1;
  }
}

function createArray(cols, rows) {
  let aGrid = [];
  for (let x = 0; x < cols; x++) {
    aGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) > 50) {
        aGrid[x].push(1);
      } else {
        aGrid[x].push(0);
      }
    }
  }
  return aGrid;
}
