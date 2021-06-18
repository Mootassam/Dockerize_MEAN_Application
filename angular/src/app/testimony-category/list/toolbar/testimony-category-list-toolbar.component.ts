import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TestimonyCategoryListService } from 'src/app/testimony-category/list/testimony-category-list.service';
import { TestimonyCategoryService } from 'src/app/testimony-category/testimony-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TestimonyCategoryDestroyService } from 'src/app/testimony-category/destroy/testimony-category-destroy.service';

@Component({
  selector: 'app-testimony-category-list-toolbar',
  templateUrl: './testimony-category-list-toolbar.component.html',
})
export class TestimonyCategoryListToolbarComponent {
  constructor(
    public service: TestimonyCategoryListService,
    private testimonyCategoryService: TestimonyCategoryService,
    private destroyService: TestimonyCategoryDestroyService,
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
    return this.testimonyCategoryService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.testimonyCategoryService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.testimonyCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.testimonyCategoryService.hasPermissionToImport;
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
