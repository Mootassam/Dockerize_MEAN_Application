import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-partner-importer',
  templateUrl: './partner-importer.component.html',
})
export class PartnerImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.partner.menu'), '/partner'],
    [i18n('entities.partner.importer.title')],
  ];
}
