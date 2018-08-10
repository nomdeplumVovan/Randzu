import { Component, EventEmitter, Input, Output} from '@angular/core';
      
@Component({
    selector: 'child1-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>
    <button (click)="change(false)">ход X {{userName}}</button>
    `,
    styles: [`h2, p {color:red;}`]
})
     

export class Player1Component{ 
    @Input() userName: string;
     _userAge: number;
      
    @Input()
    set userAge(age:number) {
        if(age<18)
            this._userAge=18;
        else if(age>60)
            this._userAge=60;
        else
            this._userAge = age;
  }
  get userAge() { return this._userAge; }
  @Output() onChanged = new EventEmitter<boolean>();
  
  change(_changed:boolean) {
      this.onChanged.emit(_changed);
  }
}