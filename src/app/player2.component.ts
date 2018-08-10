import { Component, EventEmitter, Input, Output} from '@angular/core';
      
@Component({
    selector: 'child2-comp',
    template: `<p>Имя пользователя: {{userName2}}</p>
    <p>Возраст пользователя: {{_userAge2}}</p>
    <button (click)="change(true)">ход O{{userName2}}</button>
    `,
    styles: [`h2, p {color:red;}`]
})
     

export class Player2Component{ 
    @Input() userName2: string;
     _userAge2: number;
      
    @Input()
    set userAge2(age:number) {
        if(age<18)
            this._userAge2=18;
        else if(age>60)
            this._userAge2=60;
        else
            this._userAge2 = age;
  }
  get userAge() { return this._userAge2; }

  @Output() onChanged = new EventEmitter<boolean>();

  change(_changed:boolean) {
      this.onChanged.emit(_changed);
  }
}