class Character {
  constructor(gamePort, left, top, width, height, imgSrc) {
    this.gamePort = gamePort;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.gamePort.appendChild(this.element);
  }

  move() {}

  updatePosition() {}

  didCollide(obstacle) {}

  didPowerUp(powerUp) {}
}
