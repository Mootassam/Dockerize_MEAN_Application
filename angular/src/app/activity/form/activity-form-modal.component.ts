import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ActivityApi } from 'src/app/activity/activity.api';
import { i18n } from 'src/i18n';
import { TestimonyModel } from 'src/app/testimony/testimony-model';
import { TestimonyApi } from 'src/app/testimony/testimony.api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity-form-modal',
  templateUrl: './activity-form-modal.component.html',
})
export class ActivityFormModalComponent {
  saveLoading = false;

  data : any;
  testimonyId : string;
  testimony = TestimonyModel;
  constructor(
    public dialogRef: MatDialogRef<
      ActivityFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router
  ) {}
  

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ActivityApi.create(values);
      const record = await ActivityApi.find(id);
      this.testimonyId = this.getCurrentTestimony();
      this.testimony = await TestimonyApi.find(this.testimonyId);
      this.data = {
        "activity":id
      };
      const update = await TestimonyApi.updateActivityToTestimony(this.testimonyId, this.data);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.activity.create.success'),
      );
      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
    
    window.location.reload();
  }

  getCurrentTestimony(){
    
    let testimonyId = localStorage.getItem('testimonyId');
    return testimonyId;

  }

  doCancel() {
    this.dialogRef.close();
  }
}
