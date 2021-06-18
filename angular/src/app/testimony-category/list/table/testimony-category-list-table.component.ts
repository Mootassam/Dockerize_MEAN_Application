import { Component } from '@angular/core';
import { TestimonyCategoryListService } from 'src/app/testimony-category/list/testimony-category-list.service';
import { TestimonyCategoryService } from 'src/app/testimony-category/testimony-category.service';
import { TestimonyCategoryModel } from 'src/app/testimony-category/testimony-category-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TestimonyCategoryDestroyService } from 'src/app/testimony-category/destroy/testimony-category-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-category-list-table',
  templateUrl: './testimony-category-list-table.component.html',
})
export class TestimonyCategoryListTableComponent {
  constructor(
    public service: TestimonyCategoryListService,
    public destroyService: TestimonyCategoryDestroyService,
    public testimonyCategoryService: TestimonyCategoryService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TestimonyCategoryModel.presenter(row, fieldName);
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
    return this.testimonyCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.testimonyCategoryService.hasPermissionToDestroy;
  }

  get fields() {
    return TestimonyCategoryModel.fields;
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
