import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-informations-importer',
  templateUrl: './informations-importer.component.html',
})
export class InformationsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informations.menu'), '/informations'],
    [i18n('entities.informations.importer.title')],
  ];
}
