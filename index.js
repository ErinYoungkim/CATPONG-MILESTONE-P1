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
    console.log('hello')
    let totalLives = document.getElementById('totalLives').value;
    alert('Options applied: Total Lives ' + totalLives);
    closeOptionsPopup();
}
