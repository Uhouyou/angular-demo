import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {errors} from './errors'

export interface DialogDate {
  code: string;
  message: string;
}

/**
 * @title Basic chips
 */
@Component({
  selector: 'chips-overview-example',
  templateUrl: 'chips-overview-example.html',
})
export class ChipsOverviewExample {
  errors = errors;
  code: string;
  message: string;

  constructor(public dialog: MatDialog){}

  openDialog(code_value: string, message_value: string): void{
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { code: code_value, message: message_value},
    })
    for (let error of errors){
      if(code_value === error.code){
        error.status = 1
      }
    }
    // dialogRef.afterClosed().subscribe(result => {
    //   for (let error of errors){
    //     if(code_value === error.code){
    //       error.status = 0
    //     }
    //   }
    // });
  }
}


@Component({
  selector:'dialog-overview-example-dialog',
  templateUrl:'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog{
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDate,
  ){}

  onNoClick(): void{
    this.dialogRef.close();
    for (let error of errors){
      if(this.data.code === error.code){
        error.status = 0
      }
    }
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */