import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivityFormModalComponent } from 'src/app/activity/form/activity-form-modal.component';

@Injectable()
export class ActivityFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      ActivityFormModalComponent,
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
