// WASD in Grid Demo

let grid;
let rows = 30;
let cols = 30;
let playerX = 10;
let playerY = 15;
let speed = 1;
let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = false;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[15][15] = 1;
  grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  moveSnake();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
    movingDown = false;
    movingLeft = false;
    movingRight = false;
  }
  if (key === "s") {
    movingDown = true;
    movingUp = false;
    movingLeft = false;
    movingRight = false;
  }
  if (key === "a") {
    movingLeft = true;
    movingUp = false;
    movingDown = false;
    movingRight = false;
  }
  if (key === "d") {
    movingRight = true;
    movingUp = false;
    movingDown = false;
    movingLeft = false;
  }
}

function moveSnake() {
  grid[playerY][playerX] = 0;

  // move the player
  if (movingUp && playerY > 0) {
    playerY -= 1;
  }
  if (movingDown && playerY < rows - 1) {
    playerY += 1;
  }
  if (movingRight && playerX < cols - 1) {
    playerX += 1;
  }
  if (movingLeft && playerX > 0) {
    playerX -= 1;
  }

  // put player back into grid
  grid[playerY][playerX] = 1;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}
