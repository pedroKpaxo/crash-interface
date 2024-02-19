import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Star } from '../game-logic/star';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('play', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d')!;
    // sets the width and height of the canvas on resize
    window.onresize = () => {
      // stop animation
      this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.canvas.nativeElement.width = this.canvas.nativeElement.width;
      this.canvas.nativeElement.height = this.canvas.nativeElement.height;
    }
    if (this.context) {

      // Start the star at the bottom middle of the this.canvas.nativeElement
      const star = new Star(1, 1, 1); // Adjust velocity as needed

      const animate = () => {
        requestAnimationFrame(animate);
        this.context!.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        star.update(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        star.draw(this.context!);
      }

      animate();
    }
  }
}
