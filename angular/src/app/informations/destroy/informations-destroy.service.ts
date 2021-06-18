import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { InformationsApi } from 'src/app/informations/informations.api';
import { InformationsListService } from 'src/app/informations/list/informations-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class InformationsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private informationsListService: InformationsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await InformationsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.informations.destroy.success'),
      );

      this.router.navigate(['/informations']);

      await this.informationsListService.doFetch(
        this.informationsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await InformationsApi.destroyAll(ids);
      this.loading = false;

      this.informationsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.informations.destroyAll.success'),
      );

      this.router.navigate(['/informations']);

      return this.informationsListService.doFetch(
        this.informationsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
