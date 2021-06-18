import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityApi } from 'src/app/activity/activity.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ActivityFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;
  testimonyId;
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {
    this.testimonyId = localStorage.getItem('testimonyId');
  }

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await ActivityApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/activity']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ActivityApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.activity.create.success'),
      );

      this.router.navigate(['/testimony/'+ this.testimonyId + '/edit']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await ActivityApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.activity.update.success'),
      );

      this.router.navigate(['/testimony/'+ this.testimonyId + '/edit']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
