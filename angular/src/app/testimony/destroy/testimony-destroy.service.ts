import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TestimonyApi } from 'src/app/testimony/testimony.api';
import { TestimonyListService } from 'src/app/testimony/list/testimony-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';
import * as io from 'socket.io-client'
import {environment} from 'src/environments/environment.localhost'


@Injectable({
  providedIn: 'root',
})
export class TestimonyDestroyService {
  loading = false;
  socket :any
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private testimonyListService: TestimonyListService,
  ) {
     this.socket = io(environment.urlsocket); 
  }

  async doDestroy(id) {
    try {
      this.loading = true;
      await TestimonyApi.destroyAll([id]);
      this.socket.emit('refresh',{})
      this.loading = false;
      this.snackbar.success(
        i18n('entities.testimony.destroy.success'),
      );
 
      this.router.navigate(['/testimony']);
      await this.testimonyListService.doFetch(
        this.testimonyListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TestimonyApi.destroyAll(ids);
      this.loading = false;

      this.testimonyListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.testimony.destroyAll.success'),
      );

      this.router.navigate(['/testimony']);

      return this.testimonyListService.doFetch(
        this.testimonyListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
