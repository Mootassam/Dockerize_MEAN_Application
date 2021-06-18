import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityModel } from 'src/app/activity/activity-model';
import { ActivityViewService } from 'src/app/activity/view/activity-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
})
export class ActivityViewComponent implements OnInit {
  constructor(
    private service: ActivityViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ActivityModel.presenter(row, fieldName);
  }

  get fields() {
    return ActivityModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.testimony.menu'), '/testimony'],
    [i18n('entities.activity.view.title')],
  ];
}
