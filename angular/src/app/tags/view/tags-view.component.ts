import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagsModel } from 'src/app/tags/tags-model';
import { TagsViewService } from 'src/app/tags/view/tags-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tags-view',
  templateUrl: './tags-view.component.html',
})
export class TagsViewComponent implements OnInit {
  constructor(
    private service: TagsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TagsModel.presenter(row, fieldName);
  }

  get fields() {
    return TagsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.tags.menu'), '/tags'],
    [i18n('entities.tags.view.title')],
  ];
}
