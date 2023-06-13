class Obstacles {
  constructor(gamePort) {
    console.log("working");
    this.gamePort = gamePort;
    this.left = 1000;
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 100;
    this.height = 100;
    this.element = document.createElement("img");

    const randomObstacles = [
      "/images/obstacle-one.png",
      "/images/obstacle-two.png",
      "/images/obstacle-three.png",
      "/images/obstacle-four.png",
    ];
    const randomIndex = Math.floor(Math.random() * randomObstacles.length);

    this.element.src = `${randomObstacles[randomIndex]}`;
    console.log("images");
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
    this.left -= 1;
    this.updatePosition();
    this.gamePort.appendChild(this.element);
  }
}
