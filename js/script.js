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

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowUp":
          game.character.directionY = -1;
          break;
        case "ArrowDown":
          game.character.directionY = 1;
          break;
      }
    }
  }
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowUp":
        case "ArrowDown":
          game.character.directionY = 0;
          break;
      }
    }
  }
  window.addEventListener("keyup", handleKeyup);
  window.addEventListener("keydown", handleKeydown);
};
