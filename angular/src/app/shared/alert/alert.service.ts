import { Injectable } from '@angular/core';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class AlertService {
  constructor(public dialog: MatDialog) {}

  async alert(
    title?: string,
    yesLabel?: string,
  ) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
      data: {
        title,
        yesLabel,
      },
    });

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
