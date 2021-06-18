import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestimonyModel } from 'src/app/testimony/testimony-model';
import { TestimonyViewService } from 'src/app/testimony/view/testimony-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-testimony-view',
  templateUrl: './testimony-view.component.html',
})
export class TestimonyViewComponent implements OnInit {
  constructor(
    private service: TestimonyViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TestimonyModel.presenter(row, fieldName);
  }
  
  i18n(key) {
    return i18n(key);
  }
  get fields() {
    return TestimonyModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.testimony.menu'), '/testimony'],
    [i18n('entities.testimony.view.title')],
  ];
}
