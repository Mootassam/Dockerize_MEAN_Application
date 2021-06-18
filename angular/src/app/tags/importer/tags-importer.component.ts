import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tags-importer',
  templateUrl: './tags-importer.component.html',
})
export class TagsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.tags.menu'), '/tags'],
    [i18n('entities.tags.importer.title')],
  ];
}
