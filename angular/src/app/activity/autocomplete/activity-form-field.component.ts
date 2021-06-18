import { Component, Input } from '@angular/core';
import { ActivityFormModalService } from 'src/app/activity/form/activity-form-modal.service';
import { ActivityService } from 'src/app/activity/activity.service';

@Component({
  selector: 'app-activity-form-field',
  templateUrl: './activity-form-field.component.html',
})
export class ActivityFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;

  constructor(
    public service: ActivityFormModalService,
    public activityService: ActivityService,
  ) {}

  public get hasPermissionToCreate() {
    return this.activityService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
