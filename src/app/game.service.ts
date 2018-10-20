import { Injectable, Input } from '@angular/core';
import { range } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  @Input() size: number;
  private matrix: Array<Array<String>> = [];
  private winPointsCount: number;
  public players: any = {};
  public currentPlayer: String = 'X';
  public color: any = '';
  public bgColor: any = '';

  initialize(playerNames: Array<any>, size: number = 15, winPointsCount: number = 5) {
    this.size = size;
    this.winPointsCount = winPointsCount;
    this.matrix = range(size).map(() => range(size).map(() => ''));
    this.players = {
      X: { name: playerNames[0] },
      O: { name: playerNames[1] },
    };
  }

  getGameMatrix() {
    return this.matrix;
  }

  doStep(x: number, y: number) {
    if (this.matrix[x][y] !== '') {
      return;
    }
    const symbol = this.currentPlayer;
    this.matrix[x][y] = symbol;
    this.color = (this.color === 'black') ? 'red' : 'black';
    this.currentPlayer = (symbol === 'X') ? 'O' : 'X';
    return this.checkWinConditions(x, y, symbol);
  }

  checkWinConditions(x: number, y: number, symbol: any) {
    return this.checkHorizontalCondition(x, y, symbol) ||
      this.checkVerticalCondition(x, y, symbol) ||
      this.checkLeftDiagonalCondition(x, y, symbol) ||
      this.checkRightDiagonalCondition(x, y, symbol);
  }

  private checkHorizontalCondition(x: number, y: number, symbol: any) {
    const matrix = this.matrix;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length - 4; j++) {
        const c = matrix[i][j];
        const n = matrix[i][j + 1];
        const n2 = matrix[i][j + 2];
        const n3 = matrix[i][j + 3];
        const n4 = matrix[i][j + 4];
        if (c === symbol && n === symbol && n2 === symbol && n3 === symbol && n4 === symbol) {
         this.bgColor = 'lightcyan';
         this.color = 'blue';
          return true;
        }
      }
    }
  }

  private checkVerticalCondition(x: number, y: number, symbol: any) {
    const matrix = this.matrix;
    for (let j = 0; j < matrix.length; j++) {
      for (let i = 0; i < matrix[j].length - 4; i++) {
        const c = matrix[i][j];
        const n = matrix[i + 1][j];
        const n2 = matrix[i + 2][j];
        const n3 = matrix[i + 3][j];
        const n4 = matrix[i + 4][j];
        if (c === symbol && n === symbol && n2 === symbol && n3 === symbol && n4 === symbol) {
          return true;
        }

      }
    }

    return false;
  }

  private checkLeftDiagonalCondition(x: number, y: number, symbol: any) {
    const matrix = this.matrix;
    for (let j = 0; j < matrix.length; j++) {
      for (let i = 0; i < matrix[j].length - 4; i++) {
        const c = matrix[i][j];              // диагональ \
        const n = matrix[i + 1][j + 1];
        const n2 = matrix[i + 2][j + 2];
        const n3 = matrix[i + 3][j + 3];
        const n4 = matrix[i + 4][j + 4];
        if (c === symbol && n === symbol && n2 === symbol && n3 === symbol && n4 === symbol) {
          return true;
        }

      }
    }
  }

  private checkRightDiagonalCondition(x: number, y: number, symbol: any) {
    const matrix = this.matrix;
    for (let j = 0; j < matrix.length; j++) {
      for (let i = 4; i < matrix[j].length; i++) {
        const c = matrix[i][j];              // диагональ \
        const n = matrix[i - 1][j + 1];
        const n2 = matrix[i - 2][j + 2];
        const n3 = matrix[i - 3][j + 3];
        const n4 = matrix[i - 4][j + 4];
        if (c === symbol && n === symbol && n2 === symbol && n3 === symbol && n4 === symbol) {
          return true;
        }

      }
    }
  }
}
