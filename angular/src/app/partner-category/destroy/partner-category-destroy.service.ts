import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PartnerCategoryApi } from 'src/app/partner-category/partner-category.api';
import { PartnerCategoryListService } from 'src/app/partner-category/list/partner-category-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PartnerCategoryDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private partnerCategoryListService: PartnerCategoryListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await PartnerCategoryApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.partnerCategory.destroy.success'),
      );

      this.router.navigate(['/partner-category']);

      await this.partnerCategoryListService.doFetch(
        this.partnerCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await PartnerCategoryApi.destroyAll(ids);
      this.loading = false;

      this.partnerCategoryListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.partnerCategory.destroyAll.success'),
      );

      this.router.navigate(['/partner-category']);

      return this.partnerCategoryListService.doFetch(
        this.partnerCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
