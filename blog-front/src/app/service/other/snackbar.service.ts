import { Component, ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
    selector: 'snackbar-cmp',
    template: `
<span class="example-pizza-party">
  {{data}}
</span>
        `
})
export class SnackbarComponent {
    constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    }
}

@Injectable()
export class SnackbarService {
    private rightTopPosition = {
        horizontalPosition: 'right',
        verticalPosition: 'top'
    };
    private centerBottomPosition = {
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    }
    constructor(private _snackBar: MatSnackBar,
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    openSnackBar(title: string, duration: number, position: any) {
        this._snackBar.openFromComponent(SnackbarComponent, {
            data: title,
            duration: duration * 1000,
            horizontalPosition: position.horizontalPosition,
            verticalPosition: position.horizontalPosition
        });
    }

    saveSnack(title: string) {
        this.openSnackBar(title, 3, this.centerBottomPosition);
    }

    normalSnack(title: string) {
        this.openSnackBar(title, 3, this.centerBottomPosition);
    }

}
