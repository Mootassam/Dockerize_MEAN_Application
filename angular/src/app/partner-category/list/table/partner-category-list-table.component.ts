import { Component } from '@angular/core';
import { PartnerCategoryListService } from 'src/app/partner-category/list/partner-category-list.service';
import { PartnerCategoryService } from 'src/app/partner-category/partner-category.service';
import { PartnerCategoryModel } from 'src/app/partner-category/partner-category-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PartnerCategoryDestroyService } from 'src/app/partner-category/destroy/partner-category-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-category-list-table',
  templateUrl: './partner-category-list-table.component.html',
})
export class PartnerCategoryListTableComponent {
  constructor(
    public service: PartnerCategoryListService,
    public destroyService: PartnerCategoryDestroyService,
    public partnerCategoryService: PartnerCategoryService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PartnerCategoryModel.presenter(row, fieldName);
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
    return this.partnerCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.partnerCategoryService.hasPermissionToDestroy;
  }

  get fields() {
    return PartnerCategoryModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.titleFR.name,
      this.fields.description.name,

      '_actions',
    ];
  }
}
