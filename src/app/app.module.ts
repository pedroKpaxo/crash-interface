import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BetButtonsComponent } from './shared/components/bet-buttons/bet-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BetButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
