const paddleSpeed = 5;

// Get references to the left and right paddles
let leftPaddle = document.getElementById("leftPaddle");
let rightPaddle = document.getElementById("rightPaddle");

// Initial positions of the paddles
let leftPaddleY = window.innerHeight / 2 - leftPaddle.offsetHeight / 2;
let rightPaddleY = window.innerHeight / 2 - rightPaddle.offsetHeight / 2;

let moveLeftPaddle = 0;
let moveRightPaddle = 0;

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Game loop for continuous paddle movement
function update() {
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
    let currentPaddleY = paddle === leftPaddle ? leftPaddleY : rightPaddleY;
    let newPaddleY = currentPaddleY + direction * paddleSpeed;
  // Ensure the paddles stay within the window bounds
    newPaddleY = Math.max(0, Math.min(window.innerHeight - paddle.offsetHeight, newPaddleY));
    paddle.style.top = `${newPaddleY}px`;
  // Update the global position of the paddles    
    if (paddle === leftPaddle){
        leftPaddleY = newPaddleY;
    } else {
        rightPaddleY = newPaddleY;
    }
}

function redirectToHomePage() {
  window.location.href = "home.html";
}

// function movePaddle(paddle, direction) {
//   let currentPaddleY = paddle === leftPaddle ? leftPaddleY : rightPaddleY;
//   if (direction === "up" && currentPaddleY > 0) {
//     paddle.style.top = `${currentPaddleY - paddleSpeed}px`;
//   } else if (
//     direction === "down" &&
//     currentPaddleY + paddle.offsetHeight < window.innerHeight
//   ) {
//     paddle.style.top = `${currentPaddleY + paddleSpeed}px`;
//   }
// }