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
    });
  });
  //keep your existing logic for the pingPongEffect
  document.querySelectorAll("h1 span").forEach(function (span) {
    span.style.animation = "pingPongEffect 2s ease-in-out 1";
  });
});

let backgroundMusic = document.getElementById("backgroundMusic");
let toggleMusicBtn = document.getElementById("toggleMusicBtn");
toggleMusicBtn.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;
  if (backgroundMusic.muted) {
    toggleMusicBtn.textContent = "Unmute Music";
  } else {
    toggleMusicBtn.textContent = "Mute Music";
  }
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

// this function was to redirect my home page to the game page!
function redirectToGamePage() {
  window.location.href = "game.html";
}
