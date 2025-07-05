import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // config for the pop up
  public config: MatSnackBarConfig = {
    duration: 2000
    // horizontalPosition: 'right',
    // verticalPosition: 'top'
  };

  public errorConfig: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  constructor(public snackBar: MatSnackBar) {}

  public success(message: string): void {
    // set success message
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(message, '', this.config);
  }

  public warn(message: string): void {
    // set warn message
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(message, '', this.config);
  }

  public error(message: string): void {
    // set error message
    this.config['panelClass'] = ['notification', 'error'];
    this.snackBar.open(message, '', this.errorConfig);
  }
}
