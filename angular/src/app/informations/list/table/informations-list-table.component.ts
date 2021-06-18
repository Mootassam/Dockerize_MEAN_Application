import { Component } from '@angular/core';
import { InformationsListService } from 'src/app/informations/list/informations-list.service';
import { InformationsService } from 'src/app/informations/informations.service';
import { InformationsModel } from 'src/app/informations/informations-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { InformationsDestroyService } from 'src/app/informations/destroy/informations-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-informations-list-table',
  templateUrl: './informations-list-table.component.html',
})
export class InformationsListTableComponent {
  constructor(
    public service: InformationsListService,
    public destroyService: InformationsDestroyService,
    public informationsService: InformationsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return InformationsModel.presenter(row, fieldName);
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
    return this.informationsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.informationsService.hasPermissionToDestroy;
  }

  get fields() {
    return InformationsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.category.name,
      this.fields.titleFR.name,
      // this.fields.titreEN.name,
      // this.fields.titreAR.name,
      this.fields.tags.name,

      '_actions',
    ];
  }
}
