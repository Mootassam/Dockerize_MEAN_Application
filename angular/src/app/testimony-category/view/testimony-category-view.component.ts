import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestimonyCategoryModel } from 'src/app/testimony-category/testimony-category-model';
import { TestimonyCategoryViewService } from 'src/app/testimony-category/view/testimony-category-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-testimony-category-view',
  templateUrl: './testimony-category-view.component.html',
})
export class TestimonyCategoryViewComponent implements OnInit {
  constructor(
    private service: TestimonyCategoryViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TestimonyCategoryModel.presenter(row, fieldName);
  }

  get fields() {
    return TestimonyCategoryModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.testimonyCategory.menu'), '/testimony-category'],
    [i18n('entities.testimonyCategory.view.title')],
  ];
}
