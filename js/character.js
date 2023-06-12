class Character {
  constructor(gamePort, left, top, width, height, imgSrc) {
    console.log("Character constructor called");
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

  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.left > this.gamePort.offsetWidth - this.width - 10) {
      this.left = this.gamePort.offsetWidth - this.width - 10;
    }
    if (this.top > this.gamePort.offsetHeight - this.height - 10) {
      this.top = this.gamePort.offsetHeight - this.height - 10;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {}

  didPowerUp(powerUp) {}
}
