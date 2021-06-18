import { Component, Input } from '@angular/core';
import { TestimonyCategoryFormModalService } from 'src/app/testimony-category/form/testimony-category-form-modal.service';
import { TestimonyCategoryService } from 'src/app/testimony-category/testimony-category.service';

@Component({
  selector: 'app-testimony-category-form-field',
  templateUrl: './testimony-category-form-field.component.html',
})
export class TestimonyCategoryFormFieldComponent {
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
    public service: TestimonyCategoryFormModalService,
    public testimonyCategoryService: TestimonyCategoryService,
  ) {}

  public get hasPermissionToCreate() {
    return this.testimonyCategoryService.hasPermissionToCreate;
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
