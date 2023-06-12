window.onload = function () {
  const startGameButton = document.getElementById("start-button");
  const restartGameButton = document.getElementById("restart-game-button");
  let game;

  startGameButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }
}
