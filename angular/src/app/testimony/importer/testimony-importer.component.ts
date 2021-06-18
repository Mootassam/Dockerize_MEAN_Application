import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-importer',
  templateUrl: './testimony-importer.component.html',
})
export class TestimonyImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.testimony.menu'), '/testimony'],
    [i18n('entities.testimony.importer.title')],
  ];
}
