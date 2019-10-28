let grid = [];
let rows = 30;
let cols = 30;
let autoPlay = false;


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createArray(cols, rows);
}

function draw() {
  background(220);
  showGrid(grid, rows, cols);
  if (autoPlay) {
    if (frameCount % 5 === 0) {
    update();
    }
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
}

function showGrid(grid, rows, cols) {
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

function keyPressed() {
  if (key === "r") {
    grid = createArray(cols, rows);
  } else if (key === "c") {
    grid = createEmptyGrid();
  }
  if (key === "a") {
    autoPlay = !autoPlay  }
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

function createEmptyGrid() {
  let emptyGrid = [];
  for (let y = 0; y < rows; y++) {
    emptyGrid.push([]);
    for (let x = 0; x < cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}

function update() {
  let nextTurn = createEmptyGrid();

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //deal with edge sqares
          if (x + i >= 0 && x + i < cols && y + j >= 0 && y + j < rows) {
            neighbors += grid[y + j][x + i];
          }
        }
      }
      //don't count the block you're checking as a neighbor
      neighbors -= grid[y][x];

      //apply rules
      if (grid[y][x] === 1) {
        //currently alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        } else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        //currently dead
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        } else {
          nextTurn[x][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}
