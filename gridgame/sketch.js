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

let foodX;
let foodY;

let array = [5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  } else {
    createCanvas(windowWidth * 0.9, windowWidth * 0.9);
  }
  grid = createEmptyGrid(cols, rows);

  createBorder();

  grid[playerY][playerX] = 1;
  foodX = random(array);
  foodY = random(array);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  moveSnake();
  displayFood();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  } else {
    createCanvas(windowWidth * 0.9, windowWidth * 0.9);
  }
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

function createBorder() {
  for (let i = 0; i < rows; i++) {
    grid[0][i] = 1;
  }
  for (let j = 0; j < cols; j++) {
    grid[j][0] = 1;
  }
  for (let j = cols - 1; j >= 0; j--) {
    grid[rows - 1][j] = 1;
  }
  for (let j = cols - 1; j >= 0; j--) {
    grid[j][rows - 1] = 1;
  }
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
    movingDown = false;
    movingLeft = false;
    movingRight = false;
  }
  if (key === "a") {
    movingLeft = true;
    movingUp = false;
    movingDown = false;
    movingRight = false;
  }
  if (key === "s") {
    movingDown = true;
    movingUp = false;
    movingLeft = false;
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
  // move the player
  if (frameCount % 5 === 0) {
    grid[playerY][playerX] = 0;

    if (movingUp && playerY > 1) {
      playerY -= 1;
    }
    if (movingDown && playerY < rows - 2) {
      playerY += 1;
    }
    if (movingRight && playerX < cols - 2) {
      playerX += 1;
    }
    if (movingLeft && playerX > 1) {
      playerX -= 1;
    }
    // put player back into grid
    grid[playerY][playerX] = 1;
  }
}

function displayFood() {
  grid[foodY][foodX] = 1;

  if (foodY === playerY && foodX === playerX) {
    console.log("yup");
    grid[foodY][foodX] = 0;
    foodX = random(array);
    foodY = random(array);
    grid[foodY][foodX] = 1;
  } else {
  }
}
