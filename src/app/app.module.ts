import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Player1Component }   from './child.component';
import { Player2Component} from './player2.component';
import { GridComponent }   from './grid.component';
 
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Player1Component, Player2Component, GridComponent],
    providers: [],
    bootstrap:    [ AppComponent]
})
export class AppModule { }


