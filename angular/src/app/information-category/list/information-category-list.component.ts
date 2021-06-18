import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-information-category-list',
  templateUrl: './information-category-list.component.html',
})
export class InformationCategoryListComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informationCategory.menu')],
  ];
}
