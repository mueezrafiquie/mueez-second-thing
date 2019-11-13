let grid;
let rows = 30;
let cols = 30;

let snakeBlock = {
  x: 10,
  y: 10
};

let snake = [snakeBlock];

let speed = 1;

let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = false;

let foodX;
let foodY;
let isEating = false;

let array = [5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  displaySnake();
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
        fill(180);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

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

function displaySnake() {
  for (let i = snake.length - 1; i >= 0; i--) {
    grid[snake[i].y][snake[i].x] = 1;
  }
}

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

// function moveSnake() {
//   // move the player

//   if (frameCount % 5 === 0) {
//     if (movingUp && snake[0].y > 1) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].y -= 1;
//     }
//     if (movingDown && snake[0].y < rows - 2) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].y += 1;
//     }
//     if (movingRight && snake[0].x < cols - 2) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].x += 1;
//     }
//     if (movingLeft && snake[0].x > 1) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].x -= 1;
//     }
//     // put player back into grid
//     grid[(snake[0].x, snake[0].y)] = 1;
//   }
// }

// function moveSnake() {
//   // move the player

//   if (frameCount % 5 === 0) {
//     if (movingUp && snake[0].y > 1) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].y -= 1;
//     }
//     if (movingDown && snake[0].y < rows - 2) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].y += 1;
//     }
//     if (movingRight && snake[0].x < cols - 2) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].x += 1;
//     }
//     if (movingLeft && snake[0].x > 1) {
//       grid[(snake[0].x, snake[0].y)] = 0;
//       snake[0].x -= 1;
//     }
//     // put player back into grid
//     grid[(snake[0].x, snake[0].y)] = 1;
//   }
// }
