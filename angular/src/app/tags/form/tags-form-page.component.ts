import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { TagsFormPageService } from 'src/app/tags/form/tags-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tags-form-page',
  templateUrl: './tags-form-page.component.html',
})
export class TagsFormPageComponent implements OnInit {
  constructor(
    private service: TagsFormPageService,
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
    [i18n('entities.tags.menu'), '/tags'],
    [
      this.isEditing
        ? i18n('entities.tags.edit.title')
        : i18n('entities.tags.new.title'),
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
    this.router.navigate(['/tags']);
  }
}
