import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PartnerCategoryApi } from 'src/app/partner-category/partner-category.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-category-form-modal',
  templateUrl: './partner-category-form-modal.component.html',
})
export class PartnerCategoryFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      PartnerCategoryFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await PartnerCategoryApi.create(values);
      const record = await PartnerCategoryApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.partnerCategory.create.success'),
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
