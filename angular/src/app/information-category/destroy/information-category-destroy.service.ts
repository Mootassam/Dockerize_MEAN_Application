import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { InformationCategoryApi } from 'src/app/information-category/information-category.api';
import { InformationCategoryListService } from 'src/app/information-category/list/information-category-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class InformationCategoryDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private informationCategoryListService: InformationCategoryListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await InformationCategoryApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.informationCategory.destroy.success'),
      );

      this.router.navigate(['/information-category']);

      await this.informationCategoryListService.doFetch(
        this.informationCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await InformationCategoryApi.destroyAll(ids);
      this.loading = false;

      this.informationCategoryListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.informationCategory.destroyAll.success'),
      );

      this.router.navigate(['/information-category']);

      return this.informationCategoryListService.doFetch(
        this.informationCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
