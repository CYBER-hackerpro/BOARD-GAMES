window.onload = function () {
    const intro = document.getElementById("intro");
    const homepage = document.getElementById("homepage");

    // Hide the intro and show homepage after 3 seconds
    setTimeout(function () {
        intro.style.display = "none";
        homepage.classList.remove("hidden");
    }, 3000);
};
