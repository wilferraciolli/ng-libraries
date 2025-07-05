import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'wt-mat-dialog-confirm',
  templateUrl: './mat-dialog-confirm.component.html',
  imports: [MatIcon, MatButton, MatDialogClose],
  styleUrls: ['./mat-dialog-confirm.component.scss']
})
export class MatDialogConfirmComponent implements OnInit {
  constructor(
    // @ts-ignore
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<MatDialogConfirmComponent>
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
