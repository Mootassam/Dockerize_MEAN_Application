import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TestimonyCategoryApi } from 'src/app/testimony-category/testimony-category.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-category-form-modal',
  templateUrl: './testimony-category-form-modal.component.html',
})
export class TestimonyCategoryFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TestimonyCategoryFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TestimonyCategoryApi.create(values);
      const record = await TestimonyCategoryApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.testimonyCategory.create.success'),
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
