const paddleSpeed = 5;
const ballSpeed = 10;
const maxScore = sessionStorage.getItem("totalLives") || 9;



let leftPaddle = document.getElementById("leftPaddle");
let rightPaddle = document.getElementById("rightPaddle");
let ball = document.getElementById("ball");

let gameContainerHeight = document.querySelector(".game-container").offsetHeight;
let gameContainerWidth = document.querySelector(".game-container").offsetWidth;
// let gameContainerTop = document.querySelector(".game-container").offsetTop;
// let gameContainerBottom = document.querySelector(".game-container").offsetBottom;

// Initial positions of the paddles and ball
let leftPaddleY = window.innerHeight / 2 - leftPaddle.offsetHeight / 2;
let rightPaddleY = window.innerHeight / 2 - rightPaddle.offsetHeight / 2;
let ballX = window.innerWidth / 2;
let ballY = window.innerHeight / 2;

// track the movement direction of the left and right paddles
// the game has started or not
let moveLeftPaddle = 0;
let moveRightPaddle = 0;
let isGameStarted = false;

//  track player scores, ball speed in the X and Y directions, and whether the ball is currently being reset
let player1Score = 0;
let player2Score = 0;
let ballSpeedX = ballSpeed;
let ballSpeedY = ballSpeed;
let isBallResetting = false;

// should display the winner
let winnerElement = document.getElementById("winner");
let winner = null;

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Game loop for continuous paddle movement
function update() {
  if (isGameStarted) {
    moveBall();
  }
  if (moveLeftPaddle !== 0) {
    movePaddle(leftPaddle, moveLeftPaddle);
  }
  if (moveRightPaddle !== 0) {
    movePaddle(rightPaddle, moveRightPaddle);
  }
  requestAnimationFrame(update);
}
// Start the game loop
update();

// Handle keydown events
function handleKeyDown(event) {
  switch (event.key) {
    case "w":
      moveLeftPaddle = -1;
      break;
    case "s":
      moveLeftPaddle = 1;
      break;
    case "ArrowUp":
      moveRightPaddle = -1;
      break;
    case "ArrowDown":
      moveRightPaddle = 1;
      break;
    default:
      break;
  }
}

// Handle keyup events
function handleKeyUp(event) {
  switch (event.key) {
    case "w":
    case "s":
      moveLeftPaddle = 0;
      break;
    case "ArrowUp":
    case "ArrowDown":
      moveRightPaddle = 0;
      break;
    default:
      break;
  }
}

// Move the paddles based on the direction and speed
function movePaddle(paddle, direction) {
  console.log(paddle.offsetHeight);
  // let vertical value of paddle = left else its right paddle value
  // so that it can take both vertical values
  let currentPaddleY = paddle === leftPaddle ? leftPaddleY : rightPaddleY;
  let newPaddleY = currentPaddleY + direction * paddleSpeed;
  console.log(currentPaddleY);
  // Ensure the paddles stay within the window bounds from line 93-96
  newPaddleY = Math.max(65, Math.min(gameContainerHeight - 65, newPaddleY));
  // this takes the value and allows my paddles to move on the screen
  paddle.style.top = `${newPaddleY}px`;
  paddle.style.bottom = `${newPaddleY}px`;
  // UPDATES the global position of the paddles
  if (paddle === leftPaddle) {
    leftPaddleY = newPaddleY;
  } else {
    rightPaddleY = newPaddleY;
  } 
}

// resets the ball to the center and sets its initial speed towards Player 1
function resetBall() {
  ballX = window.innerWidth / 2;
  ballY = window.innerHeight / 2;
  ballSpeedX = -ballSpeed; // Set initial direction towards Player 1
  ballSpeedY = ballSpeed;
}

function moveBall() {
  // ball's position and speed
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= ball.offsetHeight / 2 || ballY + ball.offsetHeight / 2 >= gameContainerHeight) {
    ballSpeedY = -ballSpeedY; // boundaries of top and bottom
    ballY = Math.max(ball.offsetHeight / 2,
    Math.min(gameContainerHeight - ball.offsetHeight / 2, ballY)
  );
}

  if (
    ballX - ball.offsetWidth / 2 <= leftPaddle.offsetLeft + leftPaddle.offsetWidth &&
    ballY + ball.offsetHeight / 2 >= leftPaddle.offsetTop - leftPaddle.offsetHeight / 2 &&
    ballY - ball.offsetHeight / 2 <= leftPaddle.offsetTop + leftPaddle.offsetHeight / 2
  ) {
    ballSpeedX = Math.abs(ballSpeedX); // Reverse horizontal direction on left paddle collision
  }

  if (
    ballX + ball.offsetWidth / 2 >= rightPaddle.offsetLeft &&
    ballY + ball.offsetHeight / 2 >= rightPaddle.offsetTop - rightPaddle.offsetHeight / 2 &&
    ballY - ball.offsetHeight / 2 <= rightPaddle.offsetTop + rightPaddle.offsetHeight / 2
  ) {
    ballSpeedX = -Math.abs(ballSpeedX); // Reverse horizontal direction on right paddle collision
  }

  if (ballX + ball.offsetWidth / 2 >= gameContainerWidth) {
    player1Score++;
    checkWinner();
    resetBall();
  }

  if (ballX - ball.offsetWidth / 2 <= 0) {
    player2Score++;
    checkWinner();
    resetBall();
  }

  updateScoreBoard();
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
}

function checkWinner() {
  if (player1Score >= maxScore || player2Score >= maxScore) {
    showWinner();
  }
}

function showWinner() {
  winnerElement.innerText = `Winner: ${winner}`;
  resetGame();
}

function updateScoreBoard() {
  document.querySelector('.player-1 h2').innerText = `PLAYER 1: ${player1Score}`;
  document.querySelector('.player-2 h2').innerText = `PLAYER 2: ${player2Score}`;
}

function resetGame() {
  isGameStarted = false;
  leftPaddleY = window.innerHeight / 2 - leftPaddle.offsetHeight / 2;
  rightPaddleY = window.innerHeight / 2 - rightPaddle.offsetHeight / 2;
  ballX = window.innerHeight / 2;
  ballY = window.innerHeight / 2;
  moveLeftPaddle = 0;
  moveRightPaddle = 0;
  winner = null;
  winnerElement.innerText = "";
  updateScoreBoard();
}

function startGame() {
  isGameStarted = true;
  console.log("Game started");
}

document.getElementById("startButton").addEventListener("click", startGame);

function redirectToHomePage() {
  window.location.href = "home.html";
}

