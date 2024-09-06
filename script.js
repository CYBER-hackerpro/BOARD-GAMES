document.addEventListener('DOMContentLoaded', function () {
    const intro = document.getElementById("intro");
    const homepage = document.getElementById("homepage");
    const gameSelection = document.getElementById('gameSelection');
    const gameArea = document.getElementById('gameArea');

    // Show intro for 3 seconds, then show homepage with fade-in effect
    setTimeout(function () {
        intro.classList.add("fade-out");  // Add fade-out class for smooth transition
        setTimeout(function() {
            intro.style.display = "none";  // Hide intro after fade-out
            homepage.classList.remove("hidden");  // Show homepage with fade-in
            homepage.classList.add("fade-in");

            if (gameSelection) {
                gameSelection.style.display = 'block'; // Show game selection if exists
            }
        }, 500); // Slight delay for the fade-out animation
    }, 3000);

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
        if (selectedGame) {
            selectedGame.classList.add("fade-in");  // Add fade-in animation
            selectedGame.style.display = 'block';
        }
    }

    // Expose showGame to be used on clicks or game selection
    window.showGame = showGame;
});
