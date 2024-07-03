document.addEventListener("DOMContentLoaded", () => {
    const firstLetter = document.getElementById("firstLetter") as HTMLSpanElement;
  
    // Add an event listener for the animationend event
    firstLetter.addEventListener("animationend", () => {
      // Start the cascading animation for the other spans
      document.querySelectorAll("h1 span").forEach((element, index) => {
        const span = element as HTMLSpanElement; // Assert that element is an HTMLSpanElement
        // Delay the cascading animation of the first letter
        const delay = firstLetter === span ? "1s" : `${0.1 * (index + 1)}s`;
        span.style.animation = `cascadeBounce 2s infinite ${delay}`;
        // The first letter has a delay of "1s", and the subsequent letters have a delay based on their index and a factor of 0.1 seconds.
      });
    });
  
    // duration of 2 seconds, an ease-in-out timing function, and it will run once to each <span> element inside <h1>. 
    document.querySelectorAll("h1 span").forEach((element) => {
      const span = element as HTMLSpanElement; // Assert that element is an HTMLSpanElement
      span.style.animation = "pingPongEffect 2s ease-in-out 1";
    });
  
    // Add an event listener to prevent starting music when clicking on the page
    document.addEventListener("click", (event) => {
      // Check if the clicked element is not the startMusicButton
      if ((event.target as HTMLElement).id !== "startMusicButton") {
        // playBackgroundMusic(backgroundMusic);
      }
    });
  });
  
  let totalLives = 9;
  const backgroundMusic = document.getElementById("backgroundMusic") as HTMLAudioElement;
  
  document.getElementById("startMusicButton")?.addEventListener("click", startBackgroundMusic);
  
  function startBackgroundMusic() {
    backgroundMusic.play();
    // Hide the button or remove it from the DOM
    const startMusicButton = document.getElementById("startMusicButton") as HTMLButtonElement;
    startMusicButton.style.display = "none";
  }
  
  // playBackgroundMusic(backgroundMusic);
  const toggleMusicBtn = document.getElementById("toggleMusicBtn") as HTMLButtonElement;
  toggleMusicBtn.addEventListener("click", () => {
    backgroundMusic.muted = !backgroundMusic.muted;
    updateToggleButtonText();
  });
  
  const volumeControl = document.getElementById("volumeControl") as HTMLInputElement;
  volumeControl.addEventListener("input", () => {
    backgroundMusic.volume = parseFloat(volumeControl.value);
  });
  
  function toggleOptionsPopup(display: string) {
    const optionsPopup = document.getElementById("optionsPopup") as HTMLDivElement;
    optionsPopup.style.display = display;
  }
  
  function showOptions() {
    toggleOptionsPopup("block");
  }
  
  function closeOptionsPopup() {
    toggleOptionsPopup("none");
  }
  
  function applyOptions() {
    const totalLivesInput = document.getElementById("totalLives") as HTMLInputElement;
    totalLives = parseInt(totalLivesInput.value);
    setTotalLives(totalLives);
  
    let message = "";
    if (totalLives === 9) {
      message = "You've got the purr-fect number of lives! 🐾";
    } else {
      message = `You applied ${totalLives} lives.`;
    }
    alert(message);
  }
  
  function redirectToGamePage() {
    window.location.href = "game.html";
  }
  
  function playBackgroundMusic(audioElement: HTMLAudioElement) {
    if (audioElement.paused) {
      audioElement.play().catch((error) => {
        console.error("Error playing audio", error);
      });
    }
  }
  
  function updateToggleButtonText() {
    toggleMusicBtn.textContent = backgroundMusic.muted ? "Unmute Music" : "Mute Music";
  }
  
  function setTotalLives(totalLives: number) {
    sessionStorage.setItem("totalLives", totalLives.toString());
  }
  