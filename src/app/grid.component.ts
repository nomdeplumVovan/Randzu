import { Component, Input, EventEmitter , Output } from '@angular/core';
      
@Component({
    selector: 'grid-comp',
    template: `    `,
    styles: [``]
})
     

export class GridComponent{ 
  
    @Output() onChanged = new EventEmitter<boolean>();
    change(changed:any) {
        this.onChanged.emit(changed);
    }
  
      
}