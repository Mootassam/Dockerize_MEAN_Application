import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TestimonyCategoryViewService } from 'src/app/testimony-category/view/testimony-category-view.service';
import { TestimonyCategoryService } from 'src/app/testimony-category/testimony-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TestimonyCategoryDestroyService } from 'src/app/testimony-category/destroy/testimony-category-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-testimony-category-view-toolbar',
  templateUrl: './testimony-category-view-toolbar.component.html',
})
export class TestimonyCategoryViewToolbarComponent {
  constructor(
    public service: TestimonyCategoryViewService,
    private testimonyCategoryService: TestimonyCategoryService,
    private destroyService: TestimonyCategoryDestroyService,
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
    return this.testimonyCategoryService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.testimonyCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.testimonyCategoryService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
