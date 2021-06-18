import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PartnerListService } from 'src/app/partner/list/partner-list.service';
import { PartnerService } from 'src/app/partner/partner.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PartnerDestroyService } from 'src/app/partner/destroy/partner-destroy.service';

@Component({
  selector: 'app-partner-list-toolbar',
  templateUrl: './partner-list-toolbar.component.html',
})
export class PartnerListToolbarComponent {
  constructor(
    public service: PartnerListService,
    private partnerService: PartnerService,
    private destroyService: PartnerDestroyService,
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
    return this.partnerService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.partnerService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.partnerService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.partnerService.hasPermissionToImport;
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
