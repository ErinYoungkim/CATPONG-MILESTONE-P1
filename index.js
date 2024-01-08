function showOptions() {
    let optionsPopup = document.getElementById('optionsPopup');
    optionsPopup.style.display = 'block';
}
function closeOptionsPopup() {
    let optionsPopup = document.getElementById('optionsPopup');
    optionsPopup.style.display = 'none';
}

function redirectToGamePage() {
    window.location.href = 'game.html'
}
// this function was to redirect my home page to the game page!

function applyOptions() {
    let totalLives = document.getElementById('totalLives').value;
    alert('Options applied: Total Lives ' + totalLives);
    closeOptionsPopup();
}

document.addEventListener('DOMContentLoaded', function() {
     // waits for html to load; js runs after html is parsed
    let firstLetter = document.getElementById('firstLetter');
    // Add an event listener for the animationend event
    firstLetter.addEventListener('animationend', () => {
          // Start the cascading animation for the other spans
        document.querySelectorAll('h1 span').forEach(function(span, index){
               // Delay the cascading animation of the first letter
            const delay = firstLetter === span ? '1s' : `${0.1 *(index + 1)}s`;
            span.style.animation =`cascadeBounce 2s infinite ${delay}`;
        });
    });
    // You can keep your existing logic for the pingPongEffect
    document.querySelectorAll('h1 span').forEach(function(span){
        span.style.animation = 'pingPongEffect 2s ease-in-out 1'
    });
});
