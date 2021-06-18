import { Component } from '@angular/core';
import { TestimonyListService } from 'src/app/testimony/list/testimony-list.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { TestimonyModel } from 'src/app/testimony/testimony-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TestimonyDestroyService } from 'src/app/testimony/destroy/testimony-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-list-table',
  templateUrl: './testimony-list-table.component.html',
})
export class TestimonyListTableComponent {
  constructor(
    public service: TestimonyListService,
    public destroyService: TestimonyDestroyService,
    public testimonyService: TestimonyService,
    private confirmService: ConfirmService,
  ) {
  }

  presenter(row, fieldName) {
    return TestimonyModel.presenter(row, fieldName);
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
    return this.testimonyService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.testimonyService.hasPermissionToDestroy;
  }

  get fields() {
    return TestimonyModel.fields;
  }
 
  get columns() {
    return [
      '_select',

      this.fields.category.name,
      this.fields.title.name,
      this.fields.testimonyType.name,
      this.fields.region.name,
      this.fields.status.name,
      this.fields.priority.name,
      this.fields.assignedTo.name,
      this.fields.anonymous.name,
      this.fields.tags.name,
      this.fields.transferTo.name,

      '_actions',
    ];
  }
}
