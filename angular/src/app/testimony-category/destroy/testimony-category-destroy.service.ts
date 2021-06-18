import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TestimonyCategoryApi } from 'src/app/testimony-category/testimony-category.api';
import { TestimonyCategoryListService } from 'src/app/testimony-category/list/testimony-category-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TestimonyCategoryDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private testimonyCategoryListService: TestimonyCategoryListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TestimonyCategoryApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.testimonyCategory.destroy.success'),
      );

      this.router.navigate(['/testimony-category']);

      await this.testimonyCategoryListService.doFetch(
        this.testimonyCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TestimonyCategoryApi.destroyAll(ids);
      this.loading = false;

      this.testimonyCategoryListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.testimonyCategory.destroyAll.success'),
      );

      this.router.navigate(['/testimony-category']);

      return this.testimonyCategoryListService.doFetch(
        this.testimonyCategoryListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
