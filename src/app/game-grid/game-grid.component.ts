import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  providers: [GameService],
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {
  private gameMatrix: Array<Array<String>> = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.initialize([
      'Vladimir',
      'Dmitry',
    ], this.gameService.size);

    this.gameMatrix = this.gameService.getGameMatrix();
  }

  putSymbol(x: number, y: number) {
    const isWon = this.gameService.doStep(x, y);

    if (isWon) {
      setTimeout(() => alert('!!! YOU ARE WINNER !!!'
      ), 150);
    }
  }
}
