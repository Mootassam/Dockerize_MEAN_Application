import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TagsApi } from 'src/app/tags/tags.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tags-form-modal',
  templateUrl: './tags-form-modal.component.html',
})
export class TagsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TagsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TagsApi.create(values);
      const record = await TagsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.tags.create.success'),
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
