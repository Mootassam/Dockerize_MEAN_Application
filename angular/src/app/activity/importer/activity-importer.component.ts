import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-activity-importer',
  templateUrl: './activity-importer.component.html',
})
export class ActivityImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.activity.menu'), '/activity'],
    [i18n('entities.activity.importer.title')],
  ];
}
