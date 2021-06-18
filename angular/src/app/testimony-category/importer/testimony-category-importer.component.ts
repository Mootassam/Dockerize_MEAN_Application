import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-testimony-category-importer',
  templateUrl: './testimony-category-importer.component.html',
})
export class TestimonyCategoryImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.testimonyCategory.menu'), '/testimony-category'],
    [i18n('entities.testimonyCategory.importer.title')],
  ];
}
