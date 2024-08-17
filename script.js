window.onload = function() {
    setTimeout(() => {
        document.getElementById('introScreen').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';
    }, 3000); // 3 seconds for intro screen
};

function showGame(gameId) {
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
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
