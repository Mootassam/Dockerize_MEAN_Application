import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ActivityViewService } from 'src/app/activity/view/activity-view.service';
import { ActivityService } from 'src/app/activity/activity.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ActivityDestroyService } from 'src/app/activity/destroy/activity-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-activity-view-toolbar',
  templateUrl: './activity-view-toolbar.component.html',
})
export class ActivityViewToolbarComponent {
  constructor(
    public service: ActivityViewService,
    private activityService: ActivityService,
    private destroyService: ActivityDestroyService,
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
    return this.activityService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.activityService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.activityService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
