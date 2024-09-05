document.addEventListener('DOMContentLoaded', function () {
    const intro = document.getElementById("intro");
    const homepage = document.getElementById("homepage");
    const gameSelection = document.getElementById('gameSelection');
    const gameArea = document.getElementById('gameArea');

    // Show intro for 3 seconds, then show homepage
    setTimeout(function () {
        intro.style.display = "none";  // Hide intro
        homepage.classList.remove("hidden");  // Show homepage

        if (gameSelection) {
            gameSelection.style.display = 'block'; // Show game selection if exists
        }
    }, 3000); // Adjusted to 3 seconds for consistency

    // Function to switch between game selection and a specific game
    function showGame(gameId) {
        if (gameSelection) gameSelection.style.display = 'none';  // Hide game selection
        if (gameArea) gameArea.style.display = 'block';  // Show game area

        // Hide all game areas first
        document.querySelectorAll('.game').forEach(game => {
            game.style.display = 'none';
        });

        // Show the selected game by gameId
        const selectedGame = document.getElementById(gameId);
        if (selectedGame) selectedGame.style.display = 'block';
    }

    // Expose showGame to be used on clicks or game selection
    window.showGame = showGame;
});
