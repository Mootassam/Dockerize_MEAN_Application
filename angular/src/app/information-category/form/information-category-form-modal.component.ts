import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { InformationCategoryApi } from 'src/app/information-category/information-category.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-information-category-form-modal',
  templateUrl: './information-category-form-modal.component.html',
})
export class InformationCategoryFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      InformationCategoryFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await InformationCategoryApi.create(values);
      const record = await InformationCategoryApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.informationCategory.create.success'),
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
