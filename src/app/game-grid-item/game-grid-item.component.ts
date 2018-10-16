import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-grid-item',
  templateUrl: './game-grid-item.component.html',
  styleUrls: ['./game-grid-item.component.css']
})
export class GameGridItemComponent implements OnInit {
  @Input() symbol: string;

  constructor() { }

  ngOnInit() {
  }

}
