import { Component, Input, EventEmitter } from '@angular/core';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    name: String = '';
    name2: String = '';
    age: Number = 18;
    age2: Number = 18;
    gameField = []; // игровое поле
    t: String = 'O';
    red: Boolean = true;

    @Input() size: any;

    // gameBtn() {
    //     if (isNaN(this.size)) {
    //         alert('Введите размер поля.');
    //         return;
    //     }

    //     const n = parseInt(this.size, 10);
    //     this.createField(n, n);
    // }

    onChanged(changed: any) {
        changed === true ? this.t = 'X' : this.t = 'O';
    }

    // createField(w, h) {
    //     this.gameField = new Array(h);
    //     for (let i = 0; i < h; i++) {
    //         this.gameField[i] = new Array(w);
    //         for (let j = 0; j < w; j++) {
    //             this.gameField[i][j] = '';
    //         }
    //     }
    // }

    // setCell(x, y) {
    //     this.gameField[x][y] = this.t;
    //     // TODO: Проверить выигрыш
    //     this.checkIfWin(this.gameField, this.t, x, y);
    //     // End
    //     this.t = (this.t === 'O') ? 'X' : 'O';
    // }

    // checkIfWin(arr: Array<any>, t, x, y) {

    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].length - 2; j++) {

    //             const c = arr[i][j];           // горизонталь ---
    //             const n = arr[i][j + 1];
    //             const n2 = arr[i][j + 2];
    //             if (c === t && n === t && n2 === t) {
    //                 return setTimeout(() => alert(
    //                     `${t}:   !!!ПОБЕДИТЕЛЬ!!!`
    //                 ), 100);
    //             }



    //         }
    //     }

    //     for (let j = 0; j < arr.length; j++) {
    //         for (let i = 0; i < arr[j].length - 2; i++) {
    //             const c = arr[i][j];              // диагональ \
    //             const n = arr[i + 1][j + 1];
    //             const n2 = arr[i + 2][j + 2];
    //             if (c === t && n === t && n2 === t) {
    //                 return setTimeout(() => alert(
    //                     `${t}:   !!!ПОБЕДИТЕЛЬ!!!`
    //                 ), 100);
    //             }

    //         }
    //     }

    //     for (let j = 0; j < arr.length; j++) {
    //         for (let i = 0; i < arr[j].length - 2; i++) {
    //             const c = arr[i][j];                    // вертикаль|
    //             const n = arr[i + 1][j];
    //             const n2 = arr[i + 2][j];
    //             if (c === t && n === t && n2 === t) {
    //                 return setTimeout(() => alert(
    //                     `${t}:   !!!ПОБЕДИТЕЛЬ!!!`
    //                 ), 100);
    //             }

    //         }
    //     }

    //     for (let j = 0; j < arr.length; j++) {
    //         for (let i = 2; i < arr[j].length; i++) {
    //             const c = arr[i][j];                         // диагональ /
    //             const n = arr[i - 1][j + 1];
    //             const n2 = arr[i - 2][j + 2];
    //             if (c === t && n === t && n2 === t) {
    //                 return setTimeout(() => alert(
    //                     `${t}:   !!!ПОБЕДИТЕЛЬ!!!`
    //                 ), 100);
    //             }

    //         }
    //     }


    // }

}
