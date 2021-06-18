import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { InformationsApi } from 'src/app/informations/informations.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-informations-form-modal',
  templateUrl: './informations-form-modal.component.html',
})
export class InformationsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      InformationsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await InformationsApi.create(values);
      const record = await InformationsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.informations.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
