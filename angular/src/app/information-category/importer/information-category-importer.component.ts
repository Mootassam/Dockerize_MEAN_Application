import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-information-category-importer',
  templateUrl: './information-category-importer.component.html',
})
export class InformationCategoryImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informationCategory.menu'), '/information-category'],
    [i18n('entities.informationCategory.importer.title')],
  ];
}
