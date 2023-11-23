var magicButton = document.querySelector(".magicButton");

document.querySelector(".magicButton").addEventListener("click", function() {
    var crashSound = new Audio('crash.mp3');
    crashSound.play();
});
