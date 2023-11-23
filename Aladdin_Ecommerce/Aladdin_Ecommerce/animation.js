document.addEventListener("DOMContentLoaded", function() {
    var proceedButton = document.getElementById("proceedButton");
    var smoke = document.getElementById("smoke");

    proceedButton.addEventListener("click", function() {
        // Show smoke animation
        smoke.style.left = event.clientX - 75 + "px"; // Set smoke position based on click coordinates
        smoke.style.top = event.clientY - 75 + "px";
        smoke.style.opacity = 1;
        smoke.style.animation = "none"; // Reset animation
        setTimeout(function() {
            smoke.style.animation = "smokeAnimation 3s ease-out forwards"; // Start animation after resetting
        }, 10); // Delay to ensure the animation restarts
    });
});
