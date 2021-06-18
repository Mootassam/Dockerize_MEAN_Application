import { Component } from '@angular/core';
import { TagsListService } from 'src/app/tags/list/tags-list.service';
import { TagsService } from 'src/app/tags/tags.service';
import { TagsModel } from 'src/app/tags/tags-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TagsDestroyService } from 'src/app/tags/destroy/tags-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tags-list-table',
  templateUrl: './tags-list-table.component.html',
})
export class TagsListTableComponent {
  constructor(
    public service: TagsListService,
    public destroyService: TagsDestroyService,
    public tagsService: TagsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TagsModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.tagsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.tagsService.hasPermissionToDestroy;
  }

  get fields() {
    return TagsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.titleFR.name,
      this.fields.titleEN.name,
      this.fields.titleAR.name,

      '_actions',
    ];
  }
}
