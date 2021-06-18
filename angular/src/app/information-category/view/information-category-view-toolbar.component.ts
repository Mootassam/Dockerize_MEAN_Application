import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { InformationCategoryViewService } from 'src/app/information-category/view/information-category-view.service';
import { InformationCategoryService } from 'src/app/information-category/information-category.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { InformationCategoryDestroyService } from 'src/app/information-category/destroy/information-category-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-information-category-view-toolbar',
  templateUrl: './information-category-view-toolbar.component.html',
})
export class InformationCategoryViewToolbarComponent {
  constructor(
    public service: InformationCategoryViewService,
    private informationCategoryService: InformationCategoryService,
    private destroyService: InformationCategoryDestroyService,
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
    return this.informationCategoryService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.informationCategoryService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.informationCategoryService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
