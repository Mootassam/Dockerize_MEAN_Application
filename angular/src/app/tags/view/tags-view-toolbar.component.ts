import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TagsViewService } from 'src/app/tags/view/tags-view.service';
import { TagsService } from 'src/app/tags/tags.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TagsDestroyService } from 'src/app/tags/destroy/tags-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-tags-view-toolbar',
  templateUrl: './tags-view-toolbar.component.html',
})
export class TagsViewToolbarComponent {
  constructor(
    public service: TagsViewService,
    private tagsService: TagsService,
    private destroyService: TagsDestroyService,
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
    return this.tagsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tagsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tagsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
