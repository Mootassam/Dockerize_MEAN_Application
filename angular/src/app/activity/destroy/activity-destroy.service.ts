import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ActivityApi } from 'src/app/activity/activity.api';
import { ActivityListService } from 'src/app/activity/list/activity-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ActivityDestroyService {
  loading = false;
  testimonyId;
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private activityListService: ActivityListService,
  ) {
    this.testimonyId = localStorage.getItem('testimonyId');
  }

  async doDestroy(id) {
    try {
      this.loading = true;
      await ActivityApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.activity.destroy.success'),
      );

      this.router.navigate(['/testimony/'+ this.testimonyId + '/edit']);

      await this.activityListService.doFetch(
        this.activityListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ActivityApi.destroyAll(ids);
      this.loading = false;

      this.activityListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.activity.destroyAll.success'),
      );

      this.router.navigate(['/testimony/'+ this.testimonyId + '/edit']);

      return this.activityListService.doFetch(
        this.activityListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
