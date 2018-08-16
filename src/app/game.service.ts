import { Injectable } from '@angular/core';
import { range } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private size: number;
  private matrix: Array<Array<string>> = [];
  private players: any = {};
  private winPointsCount: number;

  constructor(playerNames:Array<any>, size:number = 5, winPointsCount:number = 3) {
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

  doStep(x:number, y:number, symbol:string) {
    // Check if already taken slot
    if (this.matrix[x][y] !== '') {
      return ;
    }

    this.matrix[x][y] = symbol;

    return this.checkWinConditions(x, y, symbol);
  }

  checkWinConditions(x:number, y:number, symbol:any) {
    // todo: Check if win combination condition
    return this.checkHorizontalCondition(x, y, symbol) || 
      this.checkVerticalCondition(x, y, symbol) || 
      this.checkLeftDiagonalCondition(x, y, symbol) || 
      this.checkRightDiagonalCondition(x, y, symbol);
  }

  private checkHorizontalCondition(x:number, y:number, symbol:any) {
    // this.winPointsCount
    // todo: Check if win combination condition
    return false;
  }

  private checkVerticalCondition(x:number, y:number, symbol:any) {
    // todo: Check if win combination condition
    return false;
  }

  private checkLeftDiagonalCondition(x:number, y:number, symbol:any) {
    // todo: Check if win combination condition
    return false;
  }

  private checkRightDiagonalCondition(x:number, y:number, symbol:any) {
    // todo: Check if win combination condition
    return false;
  }

}
