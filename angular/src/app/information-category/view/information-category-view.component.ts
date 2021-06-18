import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationCategoryModel } from 'src/app/information-category/information-category-model';
import { InformationCategoryViewService } from 'src/app/information-category/view/information-category-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-information-category-view',
  templateUrl: './information-category-view.component.html',
})
export class InformationCategoryViewComponent implements OnInit {

  storageLanguageEnglish :any ; 
storageLanguageFrench :any ; 
storageLanguageArabic :any ; 


  constructor(
    private service: InformationCategoryViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
      await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return InformationCategoryModel.presenter(row, fieldName);
  }

  get fields() {
    return InformationCategoryModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }








  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informationCategory.menu'), '/information-category'],
    [i18n('entities.informationCategory.view.title')],
  ];
}
