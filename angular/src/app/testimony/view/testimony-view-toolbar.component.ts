import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TestimonyViewService } from 'src/app/testimony/view/testimony-view.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TestimonyDestroyService } from 'src/app/testimony/destroy/testimony-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-testimony-view-toolbar',
  templateUrl: './testimony-view-toolbar.component.html',
})
export class TestimonyViewToolbarComponent {
  constructor(
    public service: TestimonyViewService,
    private testimonyService: TestimonyService,
    private destroyService: TestimonyDestroyService,
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
    return this.testimonyService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.testimonyService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.testimonyService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
