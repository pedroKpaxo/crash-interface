import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bet-controllers',
  templateUrl: './bet-controllers.component.html',
  styleUrls: ['./bet-controllers.component.scss'],
})
export class BetControllersComponent {
  hasSecond = false;
  @Input() isMain = true;
  @Output() addController = new EventEmitter();

  constructor() {}

  toggleAddController() {
    this.hasSecond = !this.hasSecond;
  }
}
