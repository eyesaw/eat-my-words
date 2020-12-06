import React from 'react';
import { Player } from './Player';

export class GameHandler extends React.Component {

  private canvasElement!: HTMLCanvasElement;

  private canvasContext!: CanvasRenderingContext2D;

  private player = new Player();

  private playerImage = new Image();

  private speedX: number = 0;

  private speedY: number = 0;

  private gameBounderies = {
    height: 512,
    width: 512
  }

  constructor(props: {}) {
    super(props);
    this.playerImage.src = this.player.defaultSprice;
  }

  // game loop
  private loop(): void {
    const innerLoop = () => {
      this.canvasContext.clearRect(0, 0, 512, 512);
      this.update();
      this.setPosition();

      window.requestAnimationFrame(innerLoop);	
    };
    innerLoop();
  }

  private update(): void {
    this.canvasContext.drawImage(this.playerImage, this.player.position.x, this.player.position.y);
  }

  private setPosition(): void {
    if (this.player.position.x < this.gameBounderies.width) {
      this.player.position.x += this.speedX;
    } else {
      this.player.position.x = this.gameBounderies.width - 20; // player sprite size
      this.speedX = 0;
    }

    if (this.player.position.x > 0) {
      this.player.position.x += this.speedX;
    } else {
      this.player.position.x = 0;
      this.speedX = 0;
    }

    if (this.player.position.y < this.gameBounderies.height) {
      this.player.position.y += this.speedY;
    } else {
      this.player.position.y = this.gameBounderies.height - 20;
      this.speedY = 0;
    }

    if (this.player.position.y > 0) {
      this.player.position.y += this.speedY;
    } else {
      this.player.position.y = 0;
      this.speedY = 0;
    }
  }

  private setupListener(): void {
    document.addEventListener('keyup', event => {
      if (event.key === 'ArrowUp') this.speedY -= 1
      if (event.key === 'ArrowDown') this.speedY += 1
      if (event.key === 'ArrowLeft') this.speedX -= 1
      if (event.key === 'ArrowRight') this.speedX += 1
    })
  }

  // react hooks
  componentDidMount() {
    // register keyboard events
    this.setupListener();

    // get canvas content
    this.canvasElement = document.getElementById("canvas-id") as HTMLCanvasElement;
    this.canvasContext = this.canvasElement.getContext('2d')!;

    // start game loop
    this.loop();
  }

  render() {
    return '';
  }
}