import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PartnerApi } from 'src/app/partner/partner.api';
import { PartnerListService } from 'src/app/partner/list/partner-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PartnerDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private partnerListService: PartnerListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await PartnerApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.partner.destroy.success'),
      );

      this.router.navigate(['/partner']);

      await this.partnerListService.doFetch(
        this.partnerListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await PartnerApi.destroyAll(ids);
      this.loading = false;

      this.partnerListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.partner.destroyAll.success'),
      );

      this.router.navigate(['/partner']);

      return this.partnerListService.doFetch(
        this.partnerListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
