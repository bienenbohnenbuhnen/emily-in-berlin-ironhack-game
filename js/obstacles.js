class Obstacles {
  constructor(gamePort) {
    this.gamePort = gamePort;
    this.left = 1000;
    this.top = Math.floor(Math.random() * 350 + 70);
    this.width = 90;
    this.height = 90;
    this.element = document.createElement("img");

    const randomObstacles = [
      "images/obstacle-one.png",
      "images/obstacle-two.png",
      "images/obstacle-three.png",
      "images/obstacle-four.png",
    ];
    const randomIndex = Math.floor(Math.random() * randomObstacles.length);

    this.element.src = `${randomObstacles[randomIndex]}`;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamePort.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.left -= 4;
    this.updatePosition();
    this.gamePort.appendChild(this.element);
  }
}
