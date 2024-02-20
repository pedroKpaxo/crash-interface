import { Component, OnInit } from '@angular/core';
import { encodeMessage, decodeMessage } from './game-logic/commands/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'crash-interface';

  constructor() {}

  ngOnInit() {}
}
