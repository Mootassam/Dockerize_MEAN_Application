import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { InformationCategoryFormPageService } from 'src/app/information-category/form/information-category-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-information-category-form-page',
  templateUrl: './information-category-form-page.component.html',
})
export class InformationCategoryFormPageComponent implements OnInit {
  constructor(
    private service: InformationCategoryFormPageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doInit(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get initLoading() {
    return this.service.initLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informationCategory.menu'), '/information-category'],
    [
      this.isEditing
        ? i18n('entities.informationCategory.edit.title')
        : i18n('entities.informationCategory.new.title'),
    ],
  ];

  doSave(payload) {
    if (this.isEditing) {
      return this.service.doUpdate(
        payload.id,
        payload.values,
      );
    } else {
      return this.service.doCreate(payload.values);
    }
  }

  doCancel() {
    this.router.navigate(['/information-category']);
  }
}
