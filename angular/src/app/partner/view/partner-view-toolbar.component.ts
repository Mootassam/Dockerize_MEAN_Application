import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PartnerViewService } from 'src/app/partner/view/partner-view.service';
import { PartnerService } from 'src/app/partner/partner.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PartnerDestroyService } from 'src/app/partner/destroy/partner-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-partner-view-toolbar',
  templateUrl: './partner-view-toolbar.component.html',
})
export class PartnerViewToolbarComponent {
  constructor(
    public service: PartnerViewService,
    private partnerService: PartnerService,
    private destroyService: PartnerDestroyService,
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
    return this.partnerService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.partnerService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.partnerService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
