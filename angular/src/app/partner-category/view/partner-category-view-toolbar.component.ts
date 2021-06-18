import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PartnerCategoryViewService } from 'src/app/partner-category/view/partner-category-view.service';
import { PartnerCategoryService } from 'src/app/partner-category/partner-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PartnerCategoryDestroyService } from 'src/app/partner-category/destroy/partner-category-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-partner-category-view-toolbar',
  templateUrl: './partner-category-view-toolbar.component.html',
})
export class PartnerCategoryViewToolbarComponent {
  constructor(
    public service: PartnerCategoryViewService,
    private partnerCategoryService: PartnerCategoryService,
    private destroyService: PartnerCategoryDestroyService,
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
    return this.partnerCategoryService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.partnerCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.partnerCategoryService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
