import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TestimonyApi } from 'src/app/testimony/testimony.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-form-modal',
  templateUrl: './testimony-form-modal.component.html',
})
export class TestimonyFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TestimonyFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TestimonyApi.create(values);
      const record = await TestimonyApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.testimony.create.success'),
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
