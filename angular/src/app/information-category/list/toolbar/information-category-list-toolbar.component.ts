import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { InformationCategoryListService } from 'src/app/information-category/list/information-category-list.service';
import { InformationCategoryService } from 'src/app/information-category/information-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { InformationCategoryDestroyService } from 'src/app/information-category/destroy/information-category-destroy.service';

@Component({
  selector: 'app-information-category-list-toolbar',
  templateUrl: './information-category-list-toolbar.component.html',
})
export class InformationCategoryListToolbarComponent {
  constructor(
    public service: InformationCategoryListService,
    private informationCategoryService: InformationCategoryService,
    private destroyService: InformationCategoryDestroyService,
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
    return this.informationCategoryService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.informationCategoryService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.informationCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.informationCategoryService.hasPermissionToImport;
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
