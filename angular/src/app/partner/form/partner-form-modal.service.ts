import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PartnerFormModalComponent } from 'src/app/partner/form/partner-form-modal.component';

@Injectable()
export class PartnerFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      PartnerFormModalComponent,
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
