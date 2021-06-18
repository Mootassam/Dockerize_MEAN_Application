import { Component } from '@angular/core';
import { PartnerListService } from 'src/app/partner/list/partner-list.service';
import { PartnerService } from 'src/app/partner/partner.service';
import { PartnerModel } from 'src/app/partner/partner-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PartnerDestroyService } from 'src/app/partner/destroy/partner-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-list-table',
  templateUrl: './partner-list-table.component.html',
})
export class PartnerListTableComponent {
  constructor(
    public service: PartnerListService,
    public destroyService: PartnerDestroyService,
    public partnerService: PartnerService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PartnerModel.presenter(row, fieldName);
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
    return this.partnerService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.partnerService.hasPermissionToDestroy;
  }

  get fields() {
    return PartnerModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.category.name,
      this.fields.title.name,
      this.fields.phone.name,
      this.fields.mobile.name,
      this.fields.email.name,

      '_actions',
    ];
  }
}
