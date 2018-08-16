import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGridItemComponent } from './game-grid-item.component';

describe('GameGridItemComponent', () => {
  let component: GameGridItemComponent;
  let fixture: ComponentFixture<GameGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
