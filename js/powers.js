class PowerUps {
  constructor(gamePort) {
    this.gamePort = gamePort;
    this.left = 1000;
    this.top = Math.floor(Math.random() * 350 + 70);
    this.width = 100;
    this.height = 100;
    this.element = document.createElement("img");

      //Creates array of possible powerups, then randomises, rounded to integer
    const randomPowerUps = [
      "images/döner-power-up.png",
      "images/oatly-power-up.png",
      "images/sterni-power-up.png",
      "images/power-up-spargel.png",
    ];
    const randomChoice = Math.floor(Math.random() * randomPowerUps.length);

    this.element.src = `${randomPowerUps[randomChoice]}`;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamePort.appendChild(this.element);
  }
//Enables position of powerups to change along x and y axes
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
//Sets the rate at which the objects move
  move() {
    this.left -= 4;
    this.updatePosition();
    this.gamePort.appendChild(this.element);
  }
}
