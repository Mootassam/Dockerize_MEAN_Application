import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { InformationsViewService } from 'src/app/informations/view/informations-view.service';
import { InformationsService } from 'src/app/informations/informations.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { InformationsDestroyService } from 'src/app/informations/destroy/informations-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-informations-view-toolbar',
  templateUrl: './informations-view-toolbar.component.html',
})
export class InformationsViewToolbarComponent {
  constructor(
    public service: InformationsViewService,
    private informationsService: InformationsService,
    private destroyService: InformationsDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.informationsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.informationsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.informationsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
