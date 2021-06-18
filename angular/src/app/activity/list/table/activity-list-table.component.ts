import { Component } from '@angular/core';
import { ActivityListService } from 'src/app/activity/list/activity-list.service';
import { ActivityService } from 'src/app/activity/activity.service';
import { ActivityModel } from 'src/app/activity/activity-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ActivityDestroyService } from 'src/app/activity/destroy/activity-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-activity-list-table',
  templateUrl: './activity-list-table.component.html',
})
export class ActivityListTableComponent {
  constructor(
    public service: ActivityListService,
    public destroyService: ActivityDestroyService,
    public activityService: ActivityService,
    private confirmService: ConfirmService,
    ) {

  }

  presenter(row, fieldName) {
    return ActivityModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.activityService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.activityService.hasPermissionToDestroy;
  }

  get fields() {
    return ActivityModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.comment.name,
      this.fields.images.name,
      this.fields.audio.name,
      this.fields.documents.name,
      this.fields.video.name,
      this.fields.position.name,

      '_actions',
    ];
  }
}
