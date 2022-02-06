document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
    rockL()
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissor').addEventListener('click', function () {
    playGame(3);
});

document.getElementById('restart').addEventListener('click', function () {
    restartGame();
});

document.getElementById('next-round').addEventListener('click', function () {
    nextRound();
});