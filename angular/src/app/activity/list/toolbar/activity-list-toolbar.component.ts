import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ActivityListService } from 'src/app/activity/list/activity-list.service';
import { ActivityService } from 'src/app/activity/activity.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ActivityDestroyService } from 'src/app/activity/destroy/activity-destroy.service';

@Component({
  selector: 'app-activity-list-toolbar',
  templateUrl: './activity-list-toolbar.component.html',
})
export class ActivityListToolbarComponent {
  constructor(
    public service: ActivityListService,
    private activityService: ActivityService,
    private destroyService: ActivityDestroyService,
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
    return this.activityService.hasPermissionToCreate;
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
