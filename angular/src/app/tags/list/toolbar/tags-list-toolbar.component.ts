import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TagsListService } from 'src/app/tags/list/tags-list.service';
import { TagsService } from 'src/app/tags/tags.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TagsDestroyService } from 'src/app/tags/destroy/tags-destroy.service';

@Component({
  selector: 'app-tags-list-toolbar',
  templateUrl: './tags-list-toolbar.component.html',
})
export class TagsListToolbarComponent {
  constructor(
    public service: TagsListService,
    private tagsService: TagsService,
    private destroyService: TagsDestroyService,
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
    return this.tagsService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.tagsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tagsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tagsService.hasPermissionToImport;
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
