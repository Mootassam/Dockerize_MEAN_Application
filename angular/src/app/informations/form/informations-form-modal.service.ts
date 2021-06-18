import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InformationsFormModalComponent } from 'src/app/informations/form/informations-form-modal.component';

@Injectable()
export class InformationsFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      InformationsFormModalComponent,
      {
        width: '80%',
      },
    );

    return new Promise((resolve) => {
      const subscription = dialogRef
        .afterClosed()
        .subscribe((result) => {
          resolve(result);

          if (subscription && !subscription.closed) {
            subscription.unsubscribe();
          }
        });
    });
  }
}
