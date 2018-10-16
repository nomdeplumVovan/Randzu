import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameGridComponent } from './game-grid/game-grid.component';
import { GameGridItemComponent } from './game-grid-item/game-grid-item.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GameGridComponent, GameGridItemComponent, PlayerComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


