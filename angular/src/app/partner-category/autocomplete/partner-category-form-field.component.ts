import { Component, Input } from '@angular/core';
import { PartnerCategoryFormModalService } from 'src/app/partner-category/form/partner-category-form-modal.service';
import { PartnerCategoryService } from 'src/app/partner-category/partner-category.service';

@Component({
  selector: 'app-partner-category-form-field',
  templateUrl: './partner-category-form-field.component.html',
})
export class PartnerCategoryFormFieldComponent {
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
    public service: PartnerCategoryFormModalService,
    public partnerCategoryService: PartnerCategoryService,
  ) {}

  public get hasPermissionToCreate() {
    return this.partnerCategoryService.hasPermissionToCreate;
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
