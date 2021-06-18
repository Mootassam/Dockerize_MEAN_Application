import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TestimonyApi } from 'src/app/testimony/testimony.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivityApi } from 'src/app/activity/activity.api';

import activityExporterFields from 'src/app/activity/list/activity-exporter-fields';
import { Exporter } from 'src/app/shared/exporter/exporter';

const INITIAL_PAGE_SIZE = 10;

@Injectable({
  providedIn: 'root',
})
export class TestimonyFormPageService {

  // Paginator
  rows = [];
  count = 0;
  loading = false;
  filter: any = {};
  _pagination: any = {};
  sorter: any = {};
  selectedKeys = new SelectionModel<any>(true, []);
  exportLoading = false;
  unlimited = false;
  // paginator
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await TestimonyApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/testimony']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await TestimonyApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.testimony.create.success'),
      );

      this.router.navigate(['/testimony']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }



  async Update(id) {
    try {
      this.saveLoading = true;
      await TestimonyApi.updatefromdasboard(id);
      this.saveLoading = false;


      this.snackbar.success(
        i18n('entities.testimony.update.success'),
      );
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
  async doUpdate(id, values) {
    try {
      this.saveLoading = true;

      await TestimonyApi.update(id, values);
      this.saveLoading = false;


      this.snackbar.success(
        i18n('entities.testimony.update.success'),
      );

      this.router.navigate(['/testimony']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  //Paginator
  
  
  get hasRows() {
    return this.count > 0;
  }

  get orderBy() {
    const sorter = this.sorter;

    if (!sorter) {
      return null;
    }

    if (!sorter.columnKey) {
      return null;
    }

    let direction =
      sorter.order === 'desc' ? 'DESC' : 'ASC';

    return `${sorter.columnKey}_${direction}`;
  }

  get limit() {
    if (this.unlimited) {
      return 0;
    }

    const pagination = this._pagination;

    if (!pagination || !pagination.pageSize) {
      return INITIAL_PAGE_SIZE;
    }

    return pagination.pageSize;
  }

  get offset() {
    if (this.unlimited) {
      return 0;
    }

    const pagination = this._pagination;

    if (!pagination || !pagination.pageSize) {
      return 0;
    }

    return pagination.pageIndex * pagination.pageSize;
  }

  get pagination() {
    if (this.unlimited) {
      return false;
    }

    return {
      ...this._pagination,
      total: this.count,
      showSizeChanger: true,
    };
  }

  get paginationPageSize() {
    return this._pagination && this._pagination.pageSize
      ? this._pagination.pageSize
      : INITIAL_PAGE_SIZE;
  }

  get paginationPageIndex() {
    return this._pagination && this._pagination.pageIndex
      ? this._pagination.pageIndex
      : 0;
  }

  get selectedRows() {
    return this.rows.filter((row) =>
      this.selectedKeys.isSelected(row.id),
    );
  }

  doChangePagination(event?) {
    this._pagination = event;
    this.doFetch(this.filter, true);
  }

  async doFetch(filter?, keepPagination = false) {
    try {
      this.loading = true;
      this.rows = [];
      this.count = 0;
      if (!keepPagination) {
        this._pagination = {};
      }
      this.filter = filter || {};
      this.doResetSelectedKeys();

      const response = await ActivityApi.list(
        filter,
        this.orderBy,
        this.limit,
        this.offset,
      );

      this.rows = response.rows;
      this.count = response.count;
      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
      this.rows = [];
      this.count = 0;
    }
  }

  doResetSelectedKeys() {
    this.selectedKeys = new SelectionModel<any>(true, []);
  }

  doChangeSort(event?) {
    this.sorter = event
      ? {
          columnKey: event.active,
          order: event.direction,
        }
      : {};
    this.doFetch(this.filter, true);
  }

  async doReset() {
    this.rows = [];
    this.count = 0;
    this.loading = false;
    this.filter = {};
    this._pagination = {};
    this.sorter = {};
    this.doResetSelectedKeys();
    this.exportLoading = false;

    return this.doFetch();
  }

  async doExport() {
    try {
      this.exportLoading = true;

      const filter = this.filter;
      const response = await ActivityApi.list(
        filter,
        this.orderBy,
        null,
        null,
      );

      new Exporter(
        activityExporterFields,
        'activity',
      ).transformAndExportAsExcelFile(response.rows);

      this.exportLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.exportLoading = false;
    }
  }


  //Paginator

}
