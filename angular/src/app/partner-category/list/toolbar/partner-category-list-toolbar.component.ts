import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PartnerCategoryListService } from 'src/app/partner-category/list/partner-category-list.service';
import { PartnerCategoryService } from 'src/app/partner-category/partner-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PartnerCategoryDestroyService } from 'src/app/partner-category/destroy/partner-category-destroy.service';

@Component({
  selector: 'app-partner-category-list-toolbar',
  templateUrl: './partner-category-list-toolbar.component.html',
})
export class PartnerCategoryListToolbarComponent {
  constructor(
    public service: PartnerCategoryListService,
    private partnerCategoryService: PartnerCategoryService,
    private destroyService: PartnerCategoryDestroyService,
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
    return this.partnerCategoryService.hasPermissionToCreate;
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
