import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-category-importer',
  templateUrl: './partner-category-importer.component.html',
})
export class PartnerCategoryImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.partnerCategory.menu'), '/partner-category'],
    [i18n('entities.partnerCategory.importer.title')],
  ];
}
