import { Component, Input } from '@angular/core';
import { InformationCategoryFormModalService } from 'src/app/information-category/form/information-category-form-modal.service';
import { InformationCategoryService } from 'src/app/information-category/information-category.service';

@Component({
  selector: 'app-information-category-form-field',
  templateUrl: './information-category-form-field.component.html',
})
export class InformationCategoryFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;

  constructor(
    public service: InformationCategoryFormModalService,
    public informationCategoryService: InformationCategoryService,
  ) {}

  public get hasPermissionToCreate() {
    return this.informationCategoryService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
