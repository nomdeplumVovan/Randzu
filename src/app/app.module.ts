import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Player1Component }   from './child.component';
import { Player2Component} from './player2.component';
import { GameGridComponent } from './game-grid/game-grid.component';
import { GameGridItemComponent } from './game-grid-item/game-grid-item.component';
import { PlayerComponent } from './player/player.component';
 
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Player1Component, Player2Component, GameGridComponent, GameGridItemComponent, PlayerComponent],
    providers:    [],
    bootstrap:    [ AppComponent]
})
export class AppModule { }


