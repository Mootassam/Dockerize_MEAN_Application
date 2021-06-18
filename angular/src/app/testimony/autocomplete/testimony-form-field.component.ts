import { Component, Input } from '@angular/core';
import { TestimonyFormModalService } from 'src/app/testimony/form/testimony-form-modal.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';

@Component({
  selector: 'app-testimony-form-field',
  templateUrl: './testimony-form-field.component.html',
})
export class TestimonyFormFieldComponent {
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
    public service: TestimonyFormModalService,
    public testimonyService: TestimonyService,
  ) {}

  public get hasPermissionToCreate() {
    return this.testimonyService.hasPermissionToCreate;
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
