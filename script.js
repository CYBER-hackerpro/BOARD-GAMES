function showGame(gameId) {
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
}

function playWithBot() {
    alert('Bot play feature not yet implemented.');
}

function playChessWithBot() {
    initChess();
}

function playCheckersWithBot() {
    initCheckers();
}

function showDonation() {
    Pi.authenticate({
        onSuccess: function(authData) {
            const amount = prompt('Enter amount to donate (in Pi):');
            if (amount) {
                transferPi(authData.accessToken, amount);
            }
        },
        onFailure: function(error) {
            alert('Authentication failed: ' + error.message);
        }
    });
}

function transferPi(accessToken, amount) {
    // Implement Pi transfer logic
    alert(`Attempting to transfer ${amount} Pi...`);
}
