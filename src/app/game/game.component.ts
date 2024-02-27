import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Star } from '../game-logic/star';
import { encodeMessage, decodeMessage } from '../game-logic/commands/utils';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @ViewChild('play', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  multiplier: any;

  constructor() {}

  ngOnInit(): void {
    const webSocket = new WebSocket(
      'ws://192.168.0.112:8000/ws/?user_token={123456789}' +
        '&game_id=crash&platform_token=opagames&casino_id=opa',
    );

    webSocket.onopen = () => {
      // Send a message to start the game
      // this function is called only once when the WebSocket connection is established
      const joinPayload = { channelName: 'game' };
      const joinMessage = encodeMessage(1, joinPayload);
      webSocket.send(joinMessage);
    };

    webSocket.onmessage = async (event) => {
      // Handle the message received from the server
      // this function is called every time the server sends a message
      const message = await decodeMessage(event.data);
      if (message) {
        this.multiplier = message.message.multiplier;
      }
    };
    this.context = this.canvas.nativeElement.getContext('2d')!;
    // sets the width and height of the canvas on resize

    // Start the star at the bottom middle of the this.canvas.nativeElement
    const star = new Star(1, 1, 1); // Adjust velocity as needed
    const scale = 4;
    const widthMiddle = this.canvas.nativeElement.width / scale;
    const heightMiddle = this.canvas.nativeElement.height / scale;
    this.canvas.nativeElement.width = this.canvas.nativeElement.width * scale;
    this.canvas.nativeElement.height = this.canvas.nativeElement.height * scale;

    //this.canvas.nativeElement.style.width = this.canvas.nativeElement.width + 'px';
    //this.canvas.nativeElement.style.height = this.canvas.nativeElement.height + 'px';
    this.canvas.nativeElement.style.aspectRatio = 'auto';

    // Set the canvas for maximum resolution
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
    // Imporve text quality and bold font
    this.context.font = 'bold 80px Arial';
    this.context.fillStyle = 'white';

    const animate = () => {
      requestAnimationFrame(animate);

      this.context!.clearRect(
        0,
        0,
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height,
      );
      // Write the multiplier in the middle of the this.canvas.nativeElement
      this.context.textAlign = 'center';
      star.draw(this.context);
      star.update(
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height,
      );
      this.context.fillText(
        this.multiplier + 'x',
        widthMiddle * scale * 2,
        heightMiddle * scale * 2,
      );
    };

    animate();
  }
}
