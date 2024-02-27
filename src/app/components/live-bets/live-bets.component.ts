import { Component } from '@angular/core';
import { liveBets } from './mock-data';

@Component({
  selector: 'app-live-bets',
  templateUrl: './live-bets.component.html',
  styleUrls: ['./live-bets.component.scss'],
})
export class LiveBetsComponent {
  liveBets = liveBets;
  constructor() {}
}
