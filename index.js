document.addEventListener("DOMContentLoaded", () => {
  // waits for html to load; js runs after html is parsed
  let firstLetter = document.getElementById("firstLetter");
  // Add an event listener for the animationend event
  firstLetter.addEventListener("animationend", () => {
    // Start the cascading animation for the other spans
    document.querySelectorAll("h1 span").forEach(function (span, index) {
      // Delay the cascading animation of the first letter
      const delay = firstLetter === span ? "1s" : `${0.1 * (index + 1)}s`;
      span.style.animation = `cascadeBounce 2s infinite ${delay}`;
      // The first letter has a delay of "1s", and the subsequent letters have a delay based on their index and a factor of 0.1 seconds.
    });
  });
  // duration of 2 seconds, an ease-in-out timing function, and it will run once to each <span> element inside <h1>. 
  document.querySelectorAll("h1 span").forEach(function (span) {
    span.style.animation = "pingPongEffect 2s ease-in-out 1";
  });

  // Add an event listener to prevent starting music when clicking on the page
  document.addEventListener("click", (event) => {
    // Check if the clicked element is not the startMusicButton
    if (event.target.id !== "startMusicButton") {
      // playBackgroundMusic(backgroundMusic);
    }
  });
});

let totalLives = 9;
let backgroundMusic = document.getElementById("backgroundMusic");

document.getElementById("startMusicButton").addEventListener("click", startBackgroundMusic);

function startBackgroundMusic() {
  document.getElementById("backgroundMusic").play();

  // Hide the button or remove it from the DOM
  document.getElementById("startMusicButton").style.display = "none";
}

// playBackgroundMusic(backgroundMusic);
let toggleMusicBtn = document.getElementById("toggleMusicBtn");
toggleMusicBtn.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;
  updateToggleButtonText();
});

let volumeControl = document.getElementById("volumeControl");
volumeControl.addEventListener("input", () => {
  backgroundMusic.volume = volumeControl.value;
});

function toggleOptionsPopup(display) {
  let optionsPopup = document.getElementById("optionsPopup");
  optionsPopup.style.display = display;
}

function showOptions() {
  toggleOptionsPopup("block");
}

function closeOptionsPopup() {
  toggleOptionsPopup("none");
}

function applyOptions() {
  let totalLivesInput = document.getElementById("totalLives");
  // A function that converts a string to an integer. It takes a string as an argument and returns an integer.
  // Example: `parseInt("3")` returns the integer `3`
  // "parse" refers to the process of analyzing and interpreting data in a specific format
  let totalLives = parseInt(totalLivesInput.value);
  setTotalLives(totalLives)

  // initialize the message
  let message = "";
  if (totalLives === 9) {
    message = "You've got the purr-fect number of lives! 🐾";
  } else {
    // sets the message variable to a string using a template literal
    message = `You applied ${totalLives} lives.`;
  }
  alert(message);
}
// this function was to redirect my home page to the game page!
function redirectToGamePage() {
  window.location.href = "game.html";
}

function playBackgroundMusic(audioElement) {
  if (audioElement.paused) {
    audioElement.play().catch((error) => {
      console.error("Error playing audio", error);
    });
  }
}
// wanted an intuitive button for mute/unmute and used a ternary.
function updateToggleButtonText() {
  toggleMusicBtn.textContent = backgroundMusic.muted
    ? "Unmute Music"
    : "Mute Music";
}
function setTotalLives(totalLives) {
  sessionStorage.setItem("totalLives", totalLives)
}