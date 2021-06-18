import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TagsApi } from 'src/app/tags/tags.api';
import { TagsListService } from 'src/app/tags/list/tags-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TagsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private tagsListService: TagsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TagsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.tags.destroy.success'),
      );

      this.router.navigate(['/tags']);

      await this.tagsListService.doFetch(
        this.tagsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TagsApi.destroyAll(ids);
      this.loading = false;

      this.tagsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.tags.destroyAll.success'),
      );

      this.router.navigate(['/tags']);

      return this.tagsListService.doFetch(
        this.tagsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
