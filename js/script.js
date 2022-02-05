document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1)
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2)
});

document.getElementById('play-scissor').addEventListener('click', function () {
    playGame(3)
});

document.getElementById('restart').addEventListener('click', function () {
    restartGame();
});