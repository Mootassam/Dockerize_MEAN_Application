import { Component, Input } from '@angular/core';
import { PartnerFormModalService } from 'src/app/partner/form/partner-form-modal.service';
import { PartnerService } from 'src/app/partner/partner.service';

@Component({
  selector: 'app-partner-form-field',
  templateUrl: './partner-form-field.component.html',
})
export class PartnerFormFieldComponent {
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
    public service: PartnerFormModalService,
    public partnerService: PartnerService,
  ) {}

  public get hasPermissionToCreate() {
    return this.partnerService.hasPermissionToCreate;
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
