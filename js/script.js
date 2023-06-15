window.onload = function () {
  const startGameButton = document.getElementById("start-button");
  const restartGameButton = document.getElementById("restart-game-button");
  const musicStartClick = document.getElementById("background");
  const music = document.getElementById("music");

  musicStartClick.addEventListener("click", function () {
    playMusic();
  });

  let game;

  startGameButton.addEventListener("click", function () {
    startGame();
  });

  function playMusic() {
    music.play();
  }
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
          game.character.directionY = -2;
          break;
        case "ArrowDown":
          game.character.directionY = 2;
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

  restartGameButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
