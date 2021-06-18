import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PartnerApi } from 'src/app/partner/partner.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-form-modal',
  templateUrl: './partner-form-modal.component.html',
})
export class PartnerFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      PartnerFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await PartnerApi.create(values);
      const record = await PartnerApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.partner.create.success'),
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
