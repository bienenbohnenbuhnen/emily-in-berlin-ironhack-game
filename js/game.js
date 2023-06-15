class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen");
    this.gamePort = document.getElementById("game-port");
    this.gameOverScreen = document.getElementById("game-over");
    this.vitals = document.getElementById("vitals");
    this.character = new Character(
      this.gamePort,
      50,
      300,
      90,
      90,
      "images/main-character.png"
    );
    this.height = 500;
    this.width = 1000;
    this.obstacles = [];
    this.powerUps = [];
    this.score = 0;
    this.lives = 4;
    this.gameIsOver = false;
    //Creates key to store and retrieve high scores from the browser's local storage
    this.highScore;
    this.saveKeyScore = "highscore";
    this.scoreStr = localStorage.getItem(this.saveKeyScore);
    this.obstacleGenerationInterval = 1000;
    this.powerUpGenerationInterval = 1150;
  }
  //Sets viewport dimensions, starts game loop, calls powerup & obstacle generation methods
  start() {
    this.gamePort.style.width = `${this.width}px`;
    this.gamePort.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gamePort.style.display = "block";
    this.vitals.style.display = "block";
    this.gameLoop();
    this.startObstacleGeneration();
    this.startPowerUpGeneration();

  }

  //Allows game restart, character & object interaction
  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

//Controls character movement, object ineraction & scoring system
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

    for (let j = 0; j < this.powerUps.length; j++) {
      const powerUp = this.powerUps[j];
      powerUp.move();

      if (this.character.didCollide(powerUp)) {
        powerUp.element.remove();
        this.powerUps.splice(j, 1);
        this.score += 50;
        j--;
        document.getElementById("score").innerHTML = `${this.score}`;
      }
    }
    if (this.lives === 0) {
      this.endGame();
    }

    if (this.scoreStr == null) {
      this.highScore = 0;
      document.getElementById("high-score").innerHTML = `${this.highScore}`;
    } else {
      this.highScore = parseInt(this.scoreStr);
      document.getElementById("high-score").innerHTML = `${this.highScore}`;
    }

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem(this.saveKeyScore, this.highScore);
      document.getElementById("high-score").innerHTML = `${this.highScore}`;
    }
  }

//Sets up interval with callback function creating a new obstacle and pushing to obstacle array  
  startObstacleGeneration() {
    this.obstacleGenerationIntervalId = setInterval(() => {
      const obstacle = new Obstacles(this.gamePort);
      this.obstacles.push(obstacle);
    }, this.obstacleGenerationInterval);
  }

  startPowerUpGeneration() {
    this.powerUpGenerationIntervalId = setInterval(() => {
      const powerUp = new PowerUps(this.gamePort);
      this.powerUps.push(powerUp);
    }, this.powerUpGenerationInterval);
  }

  //Removes all game elements and displays game over screen
  endGame() {
    this.character.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.powerUps.forEach((powerUp) => powerUp.element.remove());

    this.gameIsOver = true;

    this.gamePort.style.display = "none";
    this.gameOverScreen.style.display = "block";
  }
}
