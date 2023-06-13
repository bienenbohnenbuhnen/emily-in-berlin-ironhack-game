class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen");
    this.gamePort = document.getElementById("game-port");
    this.gameOverScreen = document.getElementById("game-over");
    this.character = new Character(
      this.gamePort,
      50,
      300,
      100,
      100,
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
    this.gameLoop();
    this.startObstacleGeneration();
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
    this.character.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.character.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
        document.getElementById("lives").innerHTML = `${this.lives}`;
      }
    }
    if (this.lives === 0) {
      this.endGame();
    }
  }

  startObstacleGeneration() {
    const obstacleGenerationInterval = 1500;
    this.obstacleGenerationIntervalId = setInterval(() => {
      const obstacle = new Obstacles(this.gamePort);
      this.obstacles.push(obstacle);
    }, obstacleGenerationInterval);
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;

    this.gamePort.style.display = "none";
    this.gameOver.style.display = "block";
  }
}
