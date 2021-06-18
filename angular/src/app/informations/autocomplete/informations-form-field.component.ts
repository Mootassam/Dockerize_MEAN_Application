import { Component, Input } from '@angular/core';
import { InformationsFormModalService } from 'src/app/informations/form/informations-form-modal.service';
import { InformationsService } from 'src/app/informations/informations.service';

@Component({
  selector: 'app-informations-form-field',
  templateUrl: './informations-form-field.component.html',
})
export class InformationsFormFieldComponent {
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
    public service: InformationsFormModalService,
    public informationsService: InformationsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.informationsService.hasPermissionToCreate;
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
