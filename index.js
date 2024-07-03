var _a;
document.addEventListener("DOMContentLoaded", function () {
    var firstLetter = document.getElementById("firstLetter");
    // Add an event listener for the animationend event
    firstLetter.addEventListener("animationend", function () {
        // Start the cascading animation for the other spans
        document.querySelectorAll("h1 span").forEach(function (span, index) {
            // Delay the cascading animation of the first letter
            var delay = firstLetter === span ? "1s" : "".concat(0.1 * (index + 1), "s");
            span.style.animation = "cascadeBounce 2s infinite ".concat(delay);
            // The first letter has a delay of "1s", and the subsequent letters have a delay based on their index and a factor of 0.1 seconds.
        });
    });
    // duration of 2 seconds, an ease-in-out timing function, and it will run once to each <span> element inside <h1>. 
    document.querySelectorAll("h1 span").forEach(function (span) {
        span.style.animation = "pingPongEffect 2s ease-in-out 1";
    });
    // Add an event listener to prevent starting music when clicking on the page
    document.addEventListener("click", function (event) {
        // Check if the clicked element is not the startMusicButton
        if (event.target.id !== "startMusicButton") {
            // playBackgroundMusic(backgroundMusic);
        }
    });
});
var totalLives = 9;
var backgroundMusic = document.getElementById("backgroundMusic");
(_a = document.getElementById("startMusicButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", startBackgroundMusic);
function startBackgroundMusic() {
    backgroundMusic.play();
    // Hide the button or remove it from the DOM
    var startMusicButton = document.getElementById("startMusicButton");
    startMusicButton.style.display = "none";
}
// playBackgroundMusic(backgroundMusic);
var toggleMusicBtn = document.getElementById("toggleMusicBtn");
toggleMusicBtn.addEventListener("click", function () {
    backgroundMusic.muted = !backgroundMusic.muted;
    updateToggleButtonText();
});
var volumeControl = document.getElementById("volumeControl");
volumeControl.addEventListener("input", function () {
    backgroundMusic.volume = parseFloat(volumeControl.value);
});
function toggleOptionsPopup(display) {
    var optionsPopup = document.getElementById("optionsPopup");
    optionsPopup.style.display = display;
}
function showOptions() {
    toggleOptionsPopup("block");
}
function closeOptionsPopup() {
    toggleOptionsPopup("none");
}
function applyOptions() {
    var totalLivesInput = document.getElementById("totalLives");
    totalLives = parseInt(totalLivesInput.value);
    setTotalLives(totalLives);
    var message = "";
    if (totalLives === 9) {
        message = "You've got the purr-fect number of lives! 🐾";
    }
    else {
        message = "You applied ".concat(totalLives, " lives.");
    }
    alert(message);
}
function redirectToGamePage() {
    window.location.href = "game.html";
}
function playBackgroundMusic(audioElement) {
    if (audioElement.paused) {
        audioElement.play().catch(function (error) {
            console.error("Error playing audio", error);
        });
    }
}
function updateToggleButtonText() {
    toggleMusicBtn.textContent = backgroundMusic.muted ? "Unmute Music" : "Mute Music";
}
function setTotalLives(totalLives) {
    sessionStorage.setItem("totalLives", totalLives.toString());
}
