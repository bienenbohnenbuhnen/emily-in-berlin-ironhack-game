class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen");
    this.gamePort = document.getElementById("game-port");
    this.gameOverScreen = document.getElementById("game-over");
    this.character = new Character(
      this.gamePort,
      50,
      300,
      150,
      150,
      "/images/main-character.png"
    );
    this.height = 500;
    this.width = 1000;
    this.obstacles = [];
    this.powerUps = [];
    this.score = 0;
    this.lives = 4;
    this.gameIsOver = false;
  }

  start() {
    this.gamePort.style.width = `${this.width}px`;
    this.gamePort.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gamePort.style.display = "block";
  }

  gameLoop() {
    console.log("game looping");

    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {

  }

  endGame() {}
}
