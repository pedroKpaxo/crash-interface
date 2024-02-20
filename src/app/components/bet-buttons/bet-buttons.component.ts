import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bet-buttons',
  templateUrl: './bet-buttons.component.html',
  styleUrls: ['./bet-buttons.component.scss'],
})
export class BetButtonsComponent {
  hasSecond = false;
  @Input() isMain = true;
  @Output() addController = new EventEmitter();
  constructor() {}

  toggleAddController() {
    this.addController.emit();
  }
}
