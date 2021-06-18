import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TestimonyListService } from 'src/app/testimony/list/testimony-list.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TestimonyDestroyService } from 'src/app/testimony/destroy/testimony-destroy.service';
import * as io from 'socket.io-client'
import {environment} from 'src/environments/environment.localhost'

@Component({
  selector: 'app-testimony-list-toolbar',
  templateUrl: './testimony-list-toolbar.component.html',
})
export class TestimonyListToolbarComponent {
  socket : any
  constructor(
    public service: TestimonyListService,
    private testimonyService: TestimonyService,
    private destroyService: TestimonyDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {
    this.socket = io(environment.urlsocket); 
  }

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

    return [this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    ),

  this.socket.emit('refresh',{})]
    
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.testimonyService.hasPermissionToCreate;
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
