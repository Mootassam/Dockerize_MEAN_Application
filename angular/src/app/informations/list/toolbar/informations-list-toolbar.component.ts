import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { InformationsListService } from 'src/app/informations/list/informations-list.service';
import { InformationsService } from 'src/app/informations/informations.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { InformationsDestroyService } from 'src/app/informations/destroy/informations-destroy.service';

@Component({
  selector: 'app-informations-list-toolbar',
  templateUrl: './informations-list-toolbar.component.html',
})
export class InformationsListToolbarComponent {
  constructor(
    public service: InformationsListService,
    private informationsService: InformationsService,
    private destroyService: InformationsDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.informationsService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
