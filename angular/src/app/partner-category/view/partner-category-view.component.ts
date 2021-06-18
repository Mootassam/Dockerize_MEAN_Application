import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerCategoryModel } from 'src/app/partner-category/partner-category-model';
import { PartnerCategoryViewService } from 'src/app/partner-category/view/partner-category-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-partner-category-view',
  templateUrl: './partner-category-view.component.html',
})
export class PartnerCategoryViewComponent implements OnInit {
  constructor(
    private service: PartnerCategoryViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return PartnerCategoryModel.presenter(row, fieldName);
  }

  get fields() {
    return PartnerCategoryModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.partnerCategory.menu'), '/partner-category'],
    [i18n('entities.partnerCategory.view.title')],
  ];
}
