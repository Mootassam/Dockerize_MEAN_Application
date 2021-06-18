import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TagsFormModalComponent } from 'src/app/tags/form/tags-form-modal.component';

@Injectable()
export class TagsFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      TagsFormModalComponent,
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
