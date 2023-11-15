import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 3000,
       panelClass: ['general']
    });
  }

  openResponseSnackBar(message: string, action: string, isSuccess: boolean) {
    this.snackBar.open(message, action, {
       duration: 3000,
       panelClass: isSuccess ? ['snackbar-success'] : ['snackbar-error']
    });
  }
}
