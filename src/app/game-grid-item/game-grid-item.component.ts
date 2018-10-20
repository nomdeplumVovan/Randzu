import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-grid-item',
  templateUrl: './game-grid-item.component.html',
  styleUrls: ['./game-grid-item.component.css']
})
export class GameGridItemComponent implements OnInit {
  @Input() symbol: string;


  constructor(private gameService: GameService) { }

  color = this.gameService.color;
  bgColor = this.gameService.bgColor;

  ngOnInit() {
  }

}
