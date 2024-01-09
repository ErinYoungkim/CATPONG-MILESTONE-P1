
const paddleSpeed = 5;

// Get references to the left and right paddles
let leftPaddle = document.getElementById("leftPaddle");
let rightPaddle = document.getElementById("rightPaddle");

// Initial positions of the paddles
let leftPaddleY = window.innerHeight / 2 - leftPaddle.offsetHeight / 2;
let rightPaddleY = window.innerHeight / 2 - rightPaddle.offsetHeight / 2;

// Add event listeners for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);


function handleKeyDown(event) {
    switch (event.key) {
        case 'w':
            movePaddle(leftPaddle, 'up')
            break;
        case 's':
            movePaddle(leftPaddle, 'down');
            break;
        case 'ArrowUp':
            movePaddle(rightPaddle, 'up');
            break;
        case 'ArrowDown':
            movePaddle(rightPaddle, 'down')
            break;
            default:
            break;
    }
}

function redirectToHomePage() {
    window.location.href = 'home.html';
  }