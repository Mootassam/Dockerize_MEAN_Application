import { Component } from '@angular/core';
import { InformationCategoryListService } from 'src/app/information-category/list/information-category-list.service';
import { InformationCategoryService } from 'src/app/information-category/information-category.service';
import { InformationCategoryModel } from 'src/app/information-category/information-category-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { InformationCategoryDestroyService } from 'src/app/information-category/destroy/information-category-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-information-category-list-table',
  templateUrl: './information-category-list-table.component.html',
})
export class InformationCategoryListTableComponent {
  constructor(
    public service: InformationCategoryListService,
    public destroyService: InformationCategoryDestroyService,
    public informationCategoryService: InformationCategoryService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return InformationCategoryModel.presenter(row, fieldName);
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
    return this.informationCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.informationCategoryService.hasPermissionToDestroy;
  }

  get fields() {
    return InformationCategoryModel.fields;
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
