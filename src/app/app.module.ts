import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BetButtonsComponent } from './components/bet-buttons/bet-buttons.component';
import { SegmentsComponent } from './components/segments/segments.component';
import { BetSpinnerComponent } from './components/bet-spinner/bet-spinner.component';
import { LiveBetsComponent } from './components/live-bets/live-bets.component';
import { BetControllersComponent } from './components/bet-controllers/bet-controllers.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BetButtonsComponent,
    GameComponent,
    SegmentsComponent,
    BetSpinnerComponent,
    LiveBetsComponent,
    BetControllersComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
