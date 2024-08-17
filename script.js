document.addEventListener('DOMContentLoaded', function() {
    // Show intro for a few seconds and then display the game selection
    setTimeout(function() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('gameSelection').style.display = 'block';
    }, 2000); // 2 seconds for the intro
});

function showGame(gameId) {
    document.getElementById('gameSelection').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
}
