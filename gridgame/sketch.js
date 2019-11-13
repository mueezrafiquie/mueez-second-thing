// Grid Based Game Assignment
// Mueez Rafiquie
// November 13, 2019
//
//This is a simple snake game but the adding length property hasn't been successfully implemented
//


//Global Variables

//grid variables
let grid;
let rows = 30;
let cols = 30;

//snake variables 
let snakeBlock = {
  x: 10,
  y: 10
};
let snake = [snakeBlock];

//movement variables
let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = false;

//food variables
let foodX;
let foodY;
let isEating = false;
let array = [5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


//setting up canvas and defining any variables that contain p5js elements 
function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  } else {
    createCanvas(windowWidth * 0.9, windowWidth * 0.9);
  }
  grid = createEmptyGrid(cols, rows);

  createBorder();

  foodX = random(array);
  foodY = random(array);
}

//put function in draw loop so that they are repeatedly called
function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  displaySnake();
  moveSnake();
  displayFood();
}

//allowing the window to be resized while keeping the game playable
function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  } else {
    createCanvas(windowWidth * 0.9, windowWidth * 0.9);
  }
}

//creates an empty grid based on the number of rows and coloumns 
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

//displays rest of grid
function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      } else {
        fill(180);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

//creates a border along the outside of the grid
function createBorder() {
  for (let i = 0; i < rows; i++) {
    grid[0][i] = 1;
  }
  for (let i = 0; i < cols; i++) {
    grid[i][0] = 1;
  }
  for (let i = cols - 1; i >= 0; i--) {
    grid[rows - 1][i] = 1;
  }
  for (let i = cols - 1; i >= 0; i--) {
    grid[i][rows - 1] = 1;
  }
}

//changes booleans for direction based on what key is pressed
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

//displays generated snake
function displaySnake() {
  for (let i = snake.length - 1; i >= 0; i--) {
    grid[snake[i].y][snake[i].x] = 1;
  }
}

//moves snake based on the boolean which is true which depends on the key presssed
function moveSnake() {
  // if (snake.length === 1) {
  if (frameCount % 2 === 0) {
    for (let i = snake.length - 1; i >= 0; i--) {
      if (movingUp && snake[i].y > 1) {
        if ((isEating === false)) {
          previousLocation = snake.pop();
          grid[previousLocation.y][previousLocation.x] = 0;
          previousLocation.y -= 1;
          snake.push(snakeBlock);
        } 
        // else {
        //   snakeBlock.y -= 1;
        //   previousLocation = snake.pop();
        //   grid[previousLocation.y][previousLocation.x] = 0;
        //   previousLocation.y -= 1;
        //   snake.push(snakeBlock);
        //   snake.push(snakeBlock);
        // }


        //attempt at adding snake length
      }

      if (movingDown && snake[i].y < rows - 2) {
        previousLocation = snake.pop();
        grid[previousLocation.y][previousLocation.x] = 0;
        previousLocation.y += 1;
        snake.push(snakeBlock);
      }
      if (movingRight && snake[i].x < cols - 2) {
        previousLocation = snake.pop();
        grid[previousLocation.y][previousLocation.x] = 0;
        previousLocation.x += 1;
        snake.push(snakeBlock);
      }
      if (movingLeft && snake[i].x > 1) {
        previousLocation = snake.pop();
        grid[previousLocation.y][previousLocation.x] = 0;
        previousLocation.x -= 1;
        snake.push(snakeBlock);
      }
    }
  }
}
// }


//displays and resets the "food" whenever the snake eats it 
function displayFood() {
  grid[foodY][foodX] = 1;
  for (let i = snake.length - 1; i >= 0; i--) {
    if (foodY === snake[i].y && foodX === snake[i].x) {
      isEating = true;
      grid[foodY][foodX] = 0;
      foodX = random(array);
      foodY = random(array);
      grid[foodY][foodX] = 1;
    } else {
      isEating = false;
    }
  }
}